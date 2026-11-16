package utils

import (
	"encoding/json"
	"errors"
	"sync"
	"time"
	"uuid"

	"github.com/gorilla/websocket"
)

type BaseWsClient struct {
	ID      string
	conn    *websocket.Conn
	send    chan []byte
	once    sync.Once
	onClose func()
}

func (c *BaseWsClient) GetConn() *websocket.Conn {
	return c.conn
}

func (c *BaseWsClient) Close() error {
	var err error
	c.once.Do(func() {
		close(c.send)
		err = c.conn.Close()
		if c.onClose != nil {
			c.onClose()
		}
	})
	return err
}

func (c *BaseWsClient) readChannel(fn func(message WebsocketMessage)) {
	defer c.Close()

	c.conn.SetReadDeadline(time.Now().Add(PingPeriod))
	c.conn.SetPongHandler(func(string) error {
		c.conn.SetReadDeadline(time.Now().Add(PongWait))
		return nil
	})

	for {
		_, rawMsg, err := c.conn.ReadMessage()
		if err != nil {
			break
		}
		// Unmarshal rawMsg into WebsocketMessage and handle incoming events here
		var msg WebsocketMessage
		json.Unmarshal(rawMsg, &msg)
		fn(msg)
	}
}

func (c *BaseWsClient) writeChannel() {
	ticker := time.NewTicker(PingPeriod)
	defer func() {
		ticker.Stop()
		c.Close()
	}()

	for {
		select {
		case message, ok := <-c.send:
			c.conn.SetWriteDeadline(time.Now().Add(WriteWait))
			if !ok {
				c.conn.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}
			if err := c.conn.WriteMessage(websocket.TextMessage, message); err != nil {
				return
			}

		case <-ticker.C:
			c.conn.SetWriteDeadline(time.Now().Add(WriteWait))
			if err := c.conn.WriteMessage(websocket.PingMessage, nil); err != nil {
				return
			}
		}
	}
}

func (c *BaseWsClient) Start(fn func(message WebsocketMessage)) {
	go c.writeChannel()
	c.readChannel(fn)
}

func (c *BaseWsClient) SendJsonMessage(message WebsocketMessage) error {
	// return c.conn.WriteJSON(message)

	data, err := json.Marshal(message)
	if err != nil {
		return err
	}

	select {
	case c.send <- data:
		return nil
	default:
		c.Close()
		return errors.New("Client send buffer full")
	}
}

func (c *BaseWsClient) ReceiveJsonMessage() (WebsocketMessage, error) {
	var message WebsocketMessage
	err := c.conn.ReadJSON(&message)
	return message, err
}

func NewClient(conn *websocket.Conn, fn func()) *BaseWsClient {
	return &BaseWsClient{
		ID:      uuid.New().String(),
		conn:    conn,
		send:    make(chan []byte, 256),
		onClose: fn,
	}
}

type WsClients struct {
	clients sync.Map
}

func (w *WsClients) Add(client *BaseWsClient) {
	w.clients.Store(client.ID, client)
}

func (w *WsClients) Remove(client *BaseWsClient) {
	w.clients.Delete(client.ID)
}
