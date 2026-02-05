const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();

// db.json ফাইলের সঠিক পাথ খুঁজে বের করা
const dbPath = path.join(__dirname, "..", "src", "data", "db.json");
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

server.use(middlewares);

// /api রিকোয়েস্টগুলোকে প্রোসেস করা
server.use(
	jsonServer.rewriter({
		"/api/*": "/$1",
	}),
);

server.use(router);

module.exports = server;
