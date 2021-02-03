"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Versiones;

var _API_RUTAS_V = _interopRequireDefault(require("./API_RUTAS_V1"));

function Versiones(Rutas, controllers) {
  var RutasVersion = {
    RutasV1: (0, _API_RUTAS_V["default"])(Rutas, controllers)
  };
  return RutasVersion;
}