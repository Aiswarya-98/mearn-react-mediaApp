//import json server in index.js file

const jsonServer = require('json-server')

// create a server for json file

const mediaPlayerServer = jsonServer.create()

//set up a path for json file

const router = jsonServer.router('db.json')

// return a middleware used by json server

const middleWares = jsonServer.defaults()

// setup a port for running json server
// dynamically setting a port.

const port = 4000 || process.env.port

// uisng middlewares and router in server

mediaPlayerServer.use(middleWares)
mediaPlayerServer.use(router)

// to listen server for resolving request from server

mediaPlayerServer.listen(port, () => {
  console.log(`mediaplayer listening at port ${port}, and waiting for the client request !`);
})

