// Automatically loaded on startup
const proxy = require('http-proxy-middleware');

module.exports = function(app){
	app.use(proxy('/api/cra' , { target : "http://localhost:3002", "pathRewrite": { "^/api/": "/" }}));
	app.use(proxy('/api/people' , { target : "http://localhost:3001", "pathRewrite": { "^/api/": "/" }}));
	// app.use(proxy('/api/*' , { target : "http://localhost:3001", "pathRewrite": { "^/api/": "/" }}));
};