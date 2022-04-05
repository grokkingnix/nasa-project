// Built-in imports
const http = require("http");

// Local imports
const app = require("./app");

// Define the server port
const PORT = process.env.PORT || 8000;

// Create server
const server = http.createServer(app);

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
