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

var ER401 = _MensajeError["default"].ER401,
    ER403 = _MensajeError["default"].ER403,
    ER500 = _MensajeError["default"].ER500,
    ERMET_PATH = _MensajeError["default"].ERMET_PATH;
var login = _controllers["default"].login;
var getUsuarioId = login.getUsuarioId;
var decodeToken = _Token["default"].decodeToken;

var AuthJwt = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var cookie, datosCookie, usuario, obj;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return req.cookies.cookiauth;

          case 2:
            cookie = _context.sent;

            if (!(cookie !== undefined)) {
              _context.next = 17;
              break;
            }

            datosCookie = JSON.parse(cookie);

            if (!(datosCookie.auth === true)) {
              _context.next = 13;
              break;
            }

            usuario = decodeToken(datosCookie.token);
            _context.next = 9;
            return getUsuarioId(usuario.sub);

          case 9:
            obj = _context.sent;

            if (obj.dataValues) {
              next();
            }

            _context.next = 15;
            break;

          case 13:
            _context.next = 15;
            return res.status(401).send(ER401);

          case 15:
            _context.next = 19;
            break;

          case 17:
            _context.next = 19;
            return res.status(401).send(ER401);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function AuthJwt(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = AuthJwt;
exports["default"] = _default;