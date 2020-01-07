import http from 'http';
import app from './server';

const server = http.createServer(app);
let currentApp = app;

server.listen(process.env.PORT || 8080, function() {
	console.log('the app is on port: ' + app.get('PORT'));
})

if (module.hot) {
 module.hot.accept('./server', () => {
  server.removeListener('request', currentApp)
  server.on('request', app)
  currentApp = app
 })

 module.hot.accept('./router', () => {
 	server.removeListener('request', currentApp)
	server.on('request', app)
	currentApp = app
 })

}
