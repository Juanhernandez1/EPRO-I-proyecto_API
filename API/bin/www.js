#!/usr/bin/env node

/**
 * * Módulos y dependencias.
 */
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _http = require("http");

var _App = _interopRequireDefault(require("../App"));

var debug = require("debug")("backend:server");
/**
 * * Normaliza un puerto en un número
 */


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
/**
 * * Obteniendo el puerto del entorno y usarlo en Express.
 */


var port = normalizePort(process.env.PORT || "3100");

_App["default"].set("port", port);
/**
 * * Detector de eventos para el evento "error" del servidor HTTP.
 */


function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe ".concat(port) : "Port ".concat(port); // manejar errores de escucha específicos con mensajes amigables

  switch (error.code) {
    case "EACCES":
      console.error("".concat(bind, ", Requiere Privilegios"));
      process.exit(1);
      break;

    case "EADDRINUSE":
      console.error("".concat(bind, " Esta en uso"));
      process.exit(1);
      break;

    default:
      throw error;
  }
}
/**
 * * Creando Servidor HTTP.
 */


var server = (0, _http.createServer)(_App["default"]);
/**
 * * Detector de eventos, para eventos de "escucha" del servidor HTTP.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe ".concat(addr) : "port ".concat(addr.port);
  debug("Listening on ".concat(bind));
}
/**
 * * Escucha en el puerto, en todas las interfaces de red.
 */


server.listen(port, function () {
  console.log("Servidor Iniciado \uD83D\uDE80 \n en el puerto: ".concat(port));
});
server.on("error", onError);
server.on("listening", onListening);