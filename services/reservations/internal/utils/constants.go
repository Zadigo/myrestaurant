package utils

import "time"

var AllowedOrigins = map[string]bool{
	"http://localhost:3000": true,
	"Postman/x":             true,
	"GoTest":                true,
}

const (
	WriteWait  = 10 * time.Second
	PongWait   = 60 * time.Second
	PingPeriod = (PongWait * 9) / 10 // Must be less than pongWait (e.g., 54s)
)
