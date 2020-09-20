package routes

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func InitRoute() {
	// Gorilla mux router
	r := mux.NewRouter()

	s := r.PathPrefix("/").Subrouter()
	s.Use(verifyUser)

	// r.Handle("/", http.FileServer(http.Dir("./static")))

	r.HandleFunc("/login", login).Methods(http.MethodGet)
	s.HandleFunc("/home", home).Methods(http.MethodGet)

	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/")))
	err := http.ListenAndServe(":8080", r)
	if err != nil {
		log.Fatal(err)
	}
}
