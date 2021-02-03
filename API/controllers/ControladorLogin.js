"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ControladorLogin;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _MensajeError = _interopRequireDefault(require("../errors/MensajeError"));

var _CryptContras = _interopRequireDefault(require("./src/CryptContras"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ERDB02 = _MensajeError["default"].ERDB02,
    ERREMP = _MensajeError["default"].ERREMP,
    ER500 = _MensajeError["default"].ER500;

function ControladorLogin(Usuarios, Accesos) {
  var getUsuario = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(Usuario, Contrasena) {
      var data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Accesos.findOne({
                where: {
                  Usuario: Usuario,
                  Contrasena: Contrasena
                }
              });

            case 3:
              data = _context.sent;
              return _context.abrupt("return", data);

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(ERDB02);

            case 10:
              return _context.abrupt("return", "no acceso");

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function getUsuario(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var getUsuarioId = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
      var data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Accesos.findOne({
                where: {
                  UidUsuario: id
                }
              });

            case 3:
              data = _context2.sent;
              return _context2.abrupt("return", data);

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(ERDB02);

            case 10:
              return _context2.abrupt("return", "no encontrado");

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function getUsuarioId(_x3) {
      return _ref2.apply(this, arguments);
    };
  }(); // * crea un registro enviando un objeto completo de la tabla


  var crearUsuario = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var _req$body, Usuario, Acceso, acceso, datosEmpleado, datosAcceso;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              // * resive un objeto usuario y uno de acceso
              _req$body = req.body, Usuario = _req$body.Usuario, Acceso = _req$body.Acceso;
              acceso = _objectSpread(_objectSpread({}, Acceso), {}, {
                Contrasena: _CryptContras["default"].encriptar(Acceso.Contrasena)
              });
              _context3.next = 5;
              return Usuarios.create(Usuario);

            case 5:
              datosEmpleado = _context3.sent;

              if (!datosEmpleado.dataValues) {
                _context3.next = 10;
                break;
              }

              _context3.next = 9;
              return Accesos.create(acceso);

            case 9:
              datosAcceso = _context3.sent;

            case 10:
              if (datosAcceso.dataValues) {
                res.status(201).send({
                  message: "Usuario Registrado Satisfactoriamente Ya Puede Iniciar Sesi\xF3n \uD83E\uDDD1\u200D\uD83D\uDCBB"
                });
              }

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);

              if (_context3.t0.parent.code === "23505") {
                res.status(405).send(ERREMP);
              } else {
                res.status(500).send(ER500);
              }

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 13]]);
    }));

    return function crearUsuario(_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();

  return {
    getUsuario: getUsuario,
    crearUsuario: crearUsuario,
    getUsuarioId: getUsuarioId
  };
}