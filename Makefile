run: build
	@./bin/app

build-local:
	@go build -o bin/app .

build:
	@GOOS=linux GOARCH=arm64 go build -o bin/app .

css:
	tailwindcss build views/css/app.css -o public/styles.css --watch   

templ:
	templ generate --watch --proxy=http://localhost:4000