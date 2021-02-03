"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jwtSimple = require("jwt-simple");

var _moment = _interopRequireDefault(require("moment"));

var _dotenv = require("dotenv");

(0, _dotenv.config)();

function createToken(data) {
  var UidUsuario = data.UidUsuario;
  var payload = {
    sub: UidUsuario,
    iat: (0, _moment["default"])().unix(),
    exp: (0, _moment["default"])().add(1, "days").unix()
  };
  return (0, _jwtSimple.encode)(payload, process.env.SECRET_TOKEN);
}

function decodeToken(token) {
  var decoded = (0, _jwtSimple.decode)(token, process.env.SECRET_TOKEN);

  if (decoded.exp <= (0, _moment["default"])().unix()) {
    return "expirado";
  }

  return decoded;
}

var _default = {
  createToken: createToken,
  decodeToken: decodeToken
};
exports["default"] = _default;