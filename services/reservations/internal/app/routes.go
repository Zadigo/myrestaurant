package app

import (
	"log"

	"github.com/go-chi/chi/v5"
)

func (a *App) loadRoutes() {
	if a.router == nil {
		log.Fatal("Route is nil")
	} else {
		a.router.Route("/api/v1/", a.baseRoutes)
	}
}

func (a *App) baseRoutes(route chi.Router) {
	base := BaseHandler{app: a}
	route.Get("/", base.Get)
}
