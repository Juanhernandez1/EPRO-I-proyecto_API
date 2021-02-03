"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _database = _interopRequireDefault(require("../database"));

var _MensajeError = _interopRequireDefault(require("../errors/MensajeError"));

var _model = _interopRequireDefault(require("../model"));

var _CondicionesSql = _interopRequireDefault(require("./src/CondicionesSql"));

var _Vista = _interopRequireDefault(require("./src/Vista"));

var _ControladorCrud = _interopRequireDefault(require("./ControladorCrud"));

var _ControladorLogin = _interopRequireDefault(require("./ControladorLogin"));

var CnDb = _database["default"].CnDb,
    TestConect = _database["default"].TestConect,
    Op = _database["default"].Op;

var _initModels = (0, _model["default"])(CnDb),
    Accesos = _initModels.Accesos,
    Citas = _initModels.Citas,
    Configuracion = _initModels.Configuracion,
    Detalle = _initModels.Detalle,
    Direcciones = _initModels.Direcciones,
    InfContato = _initModels.InfContato,
    Negocios = _initModels.Negocios,
    Servicios = _initModels.Servicios,
    Usuarios = _initModels.Usuarios;

var _default = {
  Usuarios: (0, _ControladorCrud["default"])(Usuarios, Op),
  Accesos: (0, _ControladorCrud["default"])(Accesos, Op),
  Citas: (0, _ControladorCrud["default"])(Citas, Op),
  Login: (0, _ControladorLogin["default"])(Usuarios, Accesos)
};
exports["default"] = _default;