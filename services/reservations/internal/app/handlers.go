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
	
	WsMiddleware(conn)

	client := utils.NewClient(conn)
	b.app.GetRegistry().Add(client)

	for {
		_, _, err := conn.ReadMessage()
		if err != nil {
			break
		}
	}
}
