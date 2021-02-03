"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ControladorCrud;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _MensajeError = _interopRequireDefault(require("../errors/MensajeError"));

var _CondicionesSql = _interopRequireDefault(require("./src/CondicionesSql"));

var _Vista = _interopRequireDefault(require("./src/Vista"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ER405 = _MensajeError["default"].ER405,
    ERDB404LIKE = _MensajeError["default"].ERDB404LIKE,
    ER500 = _MensajeError["default"].ER500,
    ERDB01 = _MensajeError["default"].ERDB01,
    ERDB02 = _MensajeError["default"].ERDB02,
    ERDB404 = _MensajeError["default"].ERDB404; // * CRUD

function ControladorCrud(objetoModelo, Op) {
  // * datos que servirán como parámetro de es lo que de debe mostrar
  var _objetoModelo$Setting = objetoModelo.Setting(),
      campoPk = _objetoModelo$Setting.campoPk,
      condicion = _objetoModelo$Setting.condicion,
      include = _objetoModelo$Setting.include; // * condiciones de consulta


  var WhereLike = condicion.WhereLike,
      WhereStado = condicion.WhereStado,
      Where = condicion.Where;
  var campoE = WhereStado.campoE,
      valor = WhereStado.valor,
      deleteR = WhereStado.deleteR; // * muestra todos los datos condicionado a estado si es indicado

  var todos = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var estadop, estado, obj, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              // * parámetro para reemplazar el estado predeterminado
              estadop = req.params.estadop;

              // * validando que exista la variable estadop y reemplazar el estado
              if (estadop !== undefined) {
                estado = estadop;
              } else {
                estado = valor;
              } // * Objeto de Configuración de Consulta


              obj = estado !== null ? {
                raw: true,
                nest: true
              } : {
                raw: true,
                nest: true,
                where: (0, _defineProperty2["default"])({}, campoE, estado)
              };
              _context.next = 6;
              return objetoModelo.findAll(obj);

            case 6:
              data = _context.sent;

              if (data) {
                res.status(200).send(data);
              } else {
                res.status(404).send(ERDB404);
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              res.status(500).send(ER500);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function todos(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(); // * muestra una vista de datos de tablas relacionadas y condicionado a estado si es indicado


  var vistaTodos = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var estadop, estado, obj, data, contaObj, _loop;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              // * parámetro para reemplazar el estado predeterminado
              estadop = req.params.estadop;

              // * validando que exista la variable estadop y reemplazar el estado
              if (estadop !== undefined) {
                estado = estadop;
              } else {
                estado = valor;
              } // * Objeto de Configuración de Consulta


              obj = estado !== null ? {
                include: include,
                raw: true,
                nest: true
              } : {
                include: include,
                raw: true,
                nest: true,
                where: (0, _defineProperty2["default"])({}, campoE, estado)
              };
              _context2.next = 6;
              return objetoModelo.findAll(obj);

            case 6:
              data = _context2.sent;
              contaObj = 0; // * Ciclo para crear un solo objeto por registro y no tenes objetos anidados

              _loop = function _loop() {
                if (include !== null) data = (0, _Vista["default"])(data, Where);

                var objPrueba = _objectSpread({}, data[0]);

                contaObj = 0;
                var contador2 = 0;
                Object.keys(objPrueba).forEach(function (propieda) {
                  if ((0, _typeof2["default"])(objPrueba[propieda]) === "object") {
                    contador2 += 1;
                  }
                });
                contaObj = contador2;
              };

              do {
                _loop();
              } while (contaObj !== 0);

              if (data) {
                res.status(200).send(data);
              } else {
                res.status(404).send(ERDB404);
              }

              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              res.status(500).send(ER500);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
    }));

    return function vistaTodos(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }(); // * muestra datos según la pk indicada
  // * si las pk es compuesta enviar los datos separados por "-"


  var buscarXpk = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var id, _data;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              id = req.params.id;
              _context3.next = 4;
              return objetoModelo.findByPk(id);

            case 4:
              _data = _context3.sent;

              if (_data) {
                res.status(200).send(_data);
              } else {
                res.status(404).send(ERDB02);
              }

              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              res.status(500).send(ER500);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));

    return function buscarXpk(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }(); // * busca por medio del uso de like en los campos preestablecidos


  var buscarUnoX = /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var dato, busqueda, _data2;

      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              dato = req.params.dato;
              busqueda = (0, _CondicionesSql["default"])(WhereLike, dato, Op);
              _context4.next = 5;
              return objetoModelo.findOne({
                where: (0, _defineProperty2["default"])({}, Op.or, busqueda)
              });

            case 5:
              _data2 = _context4.sent;

              if (_data2) {
                res.status(201).send(_data2);
              } else {
                res.status(404).send(ERDB404LIKE);
              }

              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              res.status(500).send(_context4.t0);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 9]]);
    }));

    return function buscarUnoX(_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }(); // * busca por medio del uso de like en los campos preestablecidos


  var buscarMuchosX = /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var dato, busqueda, _data3;

      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              dato = req.params.dato;
              busqueda = (0, _CondicionesSql["default"])(WhereLike, dato, Op);
              _context5.next = 5;
              return objetoModelo.findAll({
                where: (0, _defineProperty2["default"])({}, Op.or, busqueda)
              });

            case 5:
              _data3 = _context5.sent;

              if (_data3) {
                res.status(201).send(_data3);
              } else {
                res.status(404).send(ERDB404LIKE);
              }

              _context5.next = 12;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](0);
              res.status(500).send(_context5.t0);

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 9]]);
    }));

    return function buscarMuchosX(_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }(); // * crea un registro enviando un objeto completo de la tabla


  var crear = /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
      var objBody, _data4;

      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              objBody = req.body;
              _context6.next = 4;
              return objetoModelo.create(objBody);

            case 4:
              _data4 = _context6.sent;

              if (_data4.dataValues) {
                res.status(201).send({
                  message: "Registro Creado Satisfactoriamente"
                });
              }

              _context6.next = 11;
              break;

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](0);

              if (_context6.t0.parent.code === "23505") {
                res.status(406).send(ERDB01);
              } else {
                res.status(500).send(ER500);
              }

            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 8]]);
    }));

    return function crear(_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }(); // * actualizar un registro enviando un objeto completo de la tabla
  // * agregado una propiedad llamada Pk al objeto para con los valores de los campos
  // * que corresponden ea la pk de la tabla


  var actualizar = /*#__PURE__*/function () {
    var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
      var id, _data5;

      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              id = req.body[campoPk];
              delete req.body[campoPk];
              _context7.next = 5;
              return objetoModelo.update(req.body, {
                where: (0, _defineProperty2["default"])({}, campoPk, id)
              });

            case 5:
              _data5 = _context7.sent;

              if (_data5[0] === 1) {
                res.status(202).send({
                  message: "Registro Actualizado Satisfactoriamente"
                });
              } else {
                res.status(404).send(ERDB02);
              }

              _context7.next = 12;
              break;

            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](0);
              res.status(500).send(_context7.t0);

            case 12:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 9]]);
    }));

    return function actualizar(_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }(); // * Eliminar un registro según la pk indicada
  // * si las pk es compuesta enviar los datos separados por ","


  var eliminar = /*#__PURE__*/function () {
    var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
      var id, _data6;

      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              id = req.params.id;

              if (!objetoModelo.fieldAttributeMap.estado) {
                _context8.next = 9;
                break;
              }

              _context8.next = 5;
              return objetoModelo.update((0, _defineProperty2["default"])({}, campoE, deleteR), {
                where: (0, _defineProperty2["default"])({}, campoPk, id)
              });

            case 5:
              _data6 = _context8.sent;

              if (_data6) {
                res.status(202).send({
                  message: "Registro Eliminado Satisfactoriamente"
                });
              } else {
                res.status(404).send(ERDB02);
              }

              _context8.next = 10;
              break;

            case 9:
              res.status(405).send(ER405);

            case 10:
              _context8.next = 15;
              break;

            case 12:
              _context8.prev = 12;
              _context8.t0 = _context8["catch"](0);
              res.status(500).send(_context8.t0);

            case 15:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 12]]);
    }));

    return function eliminar(_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }();

  var test = function test(req, res) {
    try {
      res.status(202).send({
        message: "Esto es una prueba"
      });
    } catch (e) {
      res.status(500).send(e);
    }
  };

  return {
    todos: todos,
    crear: crear,
    eliminar: eliminar,
    actualizar: actualizar,
    buscarUnoX: buscarUnoX,
    buscarMuchosX: buscarMuchosX,
    buscarXpk: buscarXpk,
    vistaTodos: vistaTodos,
    test: test
  };
}