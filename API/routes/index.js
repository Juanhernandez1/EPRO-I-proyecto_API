"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Versiones = _interopRequireDefault(require("./Versiones"));

var _controllers = _interopRequireDefault(require("../controllers"));

var Rutas = (0, _express.Router)();
var objVersion = (0, _Versiones["default"])(_express.Router, _controllers["default"]);
var RutasV1 = objVersion.RutasV1; // * ruta de version

Rutas.use("/v1", RutasV1);
var _default = Rutas;
exports["default"] = _default;