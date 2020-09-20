package routes

import (
	"encoding/json"
	"html/template"
	"net/http"
)

func login(rw http.ResponseWriter, r *http.Request) {

	tmpl := template.Must(template.ParseFiles("./static/forms.html"))
	if r.Method == http.MethodGet {
		tmpl.Execute(rw, "./static/forms.html")
		return
	}
}

// type res struct {
// 	Error string `json:"error"`
// }

func home(rw http.ResponseWriter, r *http.Request) {
	rw.Header().Set("Content-Type", "application/json")
	ctx := r.Context()
	// fmt.Println(ctx)
	// fmt.Println(ctx.Value("uid"))
	uid := ctx.Value("uid")
	// fmt.Println(uid)
	json.NewEncoder(rw).Encode(uid)
}
