package routes

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"strings"

	firebase "firebase.google.com/go"
	"google.golang.org/api/option"
)

func verifyUser(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// fmt.Println(uid)
		authorization := r.Header.Get("Authorization")
		header := strings.Split(authorization, " ")[1]
		log.Print(header)
		// Initialize the SDK with the downloaded service accout key file
		opt := option.WithCredentialsFile("ServicecAccountKey.json")

		// Initializing the app object
		app, err := firebase.NewApp(context.Background(), nil, opt)
		if err != nil {
			log.Fatalln(err)
		}

		client, err := app.Auth(context.TODO())
		if err != nil {
			log.Fatalf("error getting Auth client: %v\n", err)
		}

		token, err := client.VerifyIDToken(context.TODO(), header)
		if err != nil {
			log.Fatalf("error verifying ID token: %v\n", err)
		}

		log.Printf("Verified ID token: %v\n\n\n", token)
		ctx := context.WithValue(r.Context(), "uid", token.UID)

		fmt.Println(ctx)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}
