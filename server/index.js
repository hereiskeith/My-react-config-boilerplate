const express = require('express');
const path = require('path');
const http = require('http');
const routes = require('./routes');

const app = express();

// Point static path to build
app.use('/', express.static(path.join(__dirname, '..', 'build')));
app.use('/build', express.static(path.join(__dirname, '..', 'build')));

app.use('/', routes);

/** Get port from environment and store in Express. */
const port = process.env.PORT || '3000';
app.set('port', port);

/** Create HTTP server. */
const server = http.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port, () => console.log(`Server Running on port ${port}`));

