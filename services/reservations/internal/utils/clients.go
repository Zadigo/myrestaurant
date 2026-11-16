package utils

import (
	"sync"
	"uuid"

	"github.com/gorilla/websocket"
)

type BaseWsClient struct {
	ID   string
	conn *websocket.Conn
}

func (c *BaseWsClient) SendJsonMessage(message WebsocketMessage) error {
	return c.conn.WriteJSON(message)
}

func (c *BaseWsClient) ReceiveJsonMessage() (WebsocketMessage, error) {
	var message WebsocketMessage
	err := c.conn.ReadJSON(&message)
	return message, err
}

func NewClient(conn *websocket.Conn) *BaseWsClient {
	return &BaseWsClient{
		ID:   uuid.New().String(),
		conn: conn,
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
