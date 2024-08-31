package main

import (
	"log/slog"
	"net/http"
	"statberry/handlers"

	"github.com/go-chi/chi/v5"
)

func main() {
	router := chi.NewMux()

	router.Handle("/*", public())
	router.Get("/", handlers.Make(handlers.HandleIndex))
	router.Get("/data", handlers.Make(handlers.HandleData))

	listenAddr := ":4000"
	slog.Info("HTTP Server started", "listenAddr", listenAddr)
	http.ListenAndServe(listenAddr, router)
}
