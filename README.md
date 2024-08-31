# Statberry

Statberry is a simple web server written in Golang that displays various statistics related to the host machine (specifically designed for Raspberry Pi). The server fetches new data on load and then every 60 seconds after that. The data is displayed on a basic dashboard built with [HTMX](https://htmx.org/), [Templ](https://templ.guide/), [DaisyUI](https://daisyui.com/) and [Tailwindcss](https://tailwindcss.com/) - See below for reference.

![Statberry](public/assets/statberry.png)

## Requirements

- Go
- Templ
- Tailwindcss

## Installation

The entire app compiles to a single 8mb executable called `app` found in the `./bin` folder which can be run on any machine. To create this binary follow these steps:

1. **Clone the repository**:
   note: this can be cloned to your local machine as we only need the executable for the Raspberry Pi. However, if you would like clone it to your Pi that is also fine although it may be harder to work with if you need to install and dependencies.

   ```sh
   git clone https://github.com/connorrmcd6/statberry.git
   cd statberry
   ```

2. **Build the project**:

   ```sh
   make build
   ```

3. **Run the executable**:
   ```sh
   ./bin/app
   ```

## Load exe file onto Raspberry Pi

## Usage

Once the server is running, you can access it by navigating to `http://<your-raspberry-pi-ip>:4000` in your web browser. The server will display the system statistics in a simple web interface.

## Configuration

If you need to customize the server, you can modify the source code in `index.go` and rebuild the project.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements. Enjoy using Statberry to monitor your Raspberry Pi's performance! If you have any questions or need further assistance, please feel free to contact me.
