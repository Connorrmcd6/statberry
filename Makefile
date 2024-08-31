run: build
	@./bin/app

build:
	@go build -o bin/app .

build-linux:
	@GOOS=linux GOARCH=amd64 go build -o bin/app .

build-windows:
	@GOOS=windows GOARCH=amd64 go build -o bin/app.exe .

css:
	tailwindcss build views/css/app.css -o public/styles.css --watch   

templ:
	templ generate --watch --proxy=http://localhost:4000