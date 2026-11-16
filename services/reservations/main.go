package main

import (
	"context"
	"myrestaurant/reservations/internal/app"
	"os"
	"os/signal"
)

func main() {
	ctx := context.Background()
	ctx, stop := signal.NotifyContext(ctx, os.Interrupt, os.Kill)
	defer stop()
	app := app.NewApp()
	app.Start(ctx)
}
