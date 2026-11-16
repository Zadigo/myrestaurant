package app

import (
	"log"
	"time"

	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/chi/v5"
)

func (a *App) loadRoutes() {
	if a.router == nil {
		log.Fatal("Route is nil")
	} else {
		a.router.Use(middleware.RequestID)
		a.router.Use(middleware.RealIP)
		a.router.Use(Cors)
		a.router.Use(middleware.Logger)
		a.router.Use(middleware.Recoverer)
		a.router.Use(JsonHeartbeat("/health"))
		a.router.Use(middleware.Timeout(60 * time.Second))
		a.router.Use(Authorization)

		a.router.Route("/ws", a.baseRoutes)
	}
}

func (a *App) baseRoutes(route chi.Router) {
	base := BaseHandler{app: a}
	route.Get("/", base.Get)
}
