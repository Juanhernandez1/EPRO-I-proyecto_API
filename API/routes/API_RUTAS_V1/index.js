"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RV1;

var _RutasV = _interopRequireDefault(require("./RutasV1"));

function RV1(router, controllers) {
  // *Ruta modelo
  var RM = router();
  var Usuarios = controllers.Usuarios,
      Login = controllers.Login,
      Accesos = controllers.Accesos;
  RM.use("/Usuarios", (0, _RutasV["default"])(router, Usuarios));
  RM.use("/Accesos", (0, _RutasV["default"])(router, Accesos));
  return RM;
}