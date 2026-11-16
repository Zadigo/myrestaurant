package app

import (
	"myrestaurant/reservations/internal/utils"
	"net/http"
)

type BaseHandler struct {
	app *App
}

func (b *BaseHandler) Get(w http.ResponseWriter, r *http.Request) {
	conn, err := CustomRequestUpgrader.Upgrade(w, r, nil)

	if err != nil {
		http.Error(w, "Failed to upgrade", http.StatusInternalServerError)
		return
	}

	client := utils.NewClient(conn)
	cancel := WsMiddleware(client, b.app.GetRegistry())
	defer cancel()
	
	b.app.GetRegistry().Add(client)

	client.SendJsonMessage(utils.WebsocketMessage{Action: "must_identify", Message: client.ID})

	for {
		_, _, err := conn.ReadMessage()
		if err != nil {
			break
		}
	}
}
