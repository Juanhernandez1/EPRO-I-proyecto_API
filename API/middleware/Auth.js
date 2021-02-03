"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _controllers = _interopRequireDefault(require("../controllers"));

var _Token = _interopRequireDefault(require("./services/Token"));

var _MensajeError = _interopRequireDefault(require("../errors/MensajeError"));

var ERDBLOGIN = _MensajeError["default"].ERDBLOGIN;
var Login = _controllers["default"].Login;
var getUsuario = Login.getUsuario;
var createToken = _Token["default"].createToken;

var signIn = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var cookie, _req$body, Usuario, Contrasena, empleado, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return req.cookies.cookiauth;

          case 2:
            cookie = _context.sent;

            if (!(cookie === undefined)) {
              _context.next = 6;
              break;
            }

            _context.next = 6;
            return res.cookie("cookiauth", JSON.stringify({
              auth: false
            }), {
              maxAge: 86400 * 1000,
              // 24 hours
              httpOnly: true // http only, prevents JavaScript cookie access

            });

          case 6:
            _req$body = req.body, Usuario = _req$body.Usuario, Contrasena = _req$body.Contrasena;
            _context.next = 9;
            return getUsuario(Usuario, Contrasena);

          case 9:
            empleado = _context.sent;

            if (!(empleado !== "no acceso")) {
              _context.next = 17;
              break;
            }

            token = createToken(empleado);
            _context.next = 14;
            return res.cookie("cookiauth", JSON.stringify({
              auth: true,
              token: token
            }), {
              maxAge: 86400 * 1000,
              // 24 hours
              httpOnly: true // http only, prevents JavaScript cookie access

            });

          case 14:
            res.status(202).send({
              mesage: "Se a iniciado Secion"
            });
            _context.next = 19;
            break;

          case 17:
            _context.next = 19;
            return res.status(403).send(ERDBLOGIN);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signIn(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = signIn;
exports["default"] = _default;