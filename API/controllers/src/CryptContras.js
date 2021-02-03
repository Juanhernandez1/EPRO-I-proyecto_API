"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcryptjs = require("bcryptjs");

function encriptar(contraseña) {
  var salt = (0, _bcryptjs.genSaltSync)(10);
  var hash = (0, _bcryptjs.hashSync)(contraseña, salt);
  return hash;
}

function comparar(contraseña, contraseñaDB) {
  return (0, _bcryptjs.compareSync)(contraseña, contraseñaDB); // true
}

var _default = {
  encriptar: encriptar,
  comparar: comparar
};
exports["default"] = _default;