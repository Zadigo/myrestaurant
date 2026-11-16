package app

import (
	"context"
	"fmt"
	"log"
	"myrestaurant/reservations/internal/utils"
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
)

type App struct {
	router    *chi.Mux
	wsClients *utils.WsClients
}

func (a *App) GetRegistry() *utils.WsClients {
	return a.wsClients
}

func (a *App) Start(ctx context.Context) {
	server := http.Server{
		Addr:    ":9000",
		Handler: a.router,
	}

	chErr := make(chan error)

	go func() {
		fmt.Println("⚡️ Starting web server...")
		chErr <- server.ListenAndServe()
	}()

	select {
	case err := <-chErr:
		log.Fatalf("server error: %v", err)
	case <-ctx.Done():
		timeoutCtx, cancel := context.WithTimeout(ctx, 15*time.Second)
		defer cancel()
		server.Shutdown(timeoutCtx)
		fmt.Println("🔴 Stopping server")
	}
}

func NewApp() *App {
	app := &App{
		router:    chi.NewRouter(),
		wsClients: &utils.WsClients{},
	}
	app.loadRoutes()
	return app
}
