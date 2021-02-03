"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initModels;

var _sequelize = require("sequelize");

var _Accesos2 = _interopRequireDefault(require("./public/Accesos"));

var _Citas2 = _interopRequireDefault(require("./public/Citas"));

var _Configuracion2 = _interopRequireDefault(require("./public/Configuracion"));

var _Detalle2 = _interopRequireDefault(require("./public/Detalle"));

var _Direcciones2 = _interopRequireDefault(require("./public/Direcciones"));

var _InfContato2 = _interopRequireDefault(require("./public/InfContato"));

var _Negocios2 = _interopRequireDefault(require("./public/Negocios"));

var _Servicios2 = _interopRequireDefault(require("./public/Servicios"));

var _Usuarios2 = _interopRequireDefault(require("./public/Usuarios"));

function initModels(sequelize) {
  var Accesos = _Accesos2["default"].init(sequelize, _sequelize.DataTypes);

  var Citas = _Citas2["default"].init(sequelize, _sequelize.DataTypes);

  var Configuracion = _Configuracion2["default"].init(sequelize, _sequelize.DataTypes);

  var Detalle = _Detalle2["default"].init(sequelize, _sequelize.DataTypes);

  var Direcciones = _Direcciones2["default"].init(sequelize, _sequelize.DataTypes);

  var InfContato = _InfContato2["default"].init(sequelize, _sequelize.DataTypes);

  var Negocios = _Negocios2["default"].init(sequelize, _sequelize.DataTypes);

  var Servicios = _Servicios2["default"].init(sequelize, _sequelize.DataTypes);

  var Usuarios = _Usuarios2["default"].init(sequelize, _sequelize.DataTypes);

  Accesos.belongsTo(Usuarios, {
    as: "UidUsuarioUsuario",
    foreignKey: "UidUsuario"
  });
  Usuarios.hasOne(Accesos, {
    as: "Acceso",
    foreignKey: "UidUsuario"
  });
  Citas.belongsTo(Negocios, {
    as: "UidNegocioNegocio",
    foreignKey: "UidNegocio"
  });
  Negocios.hasMany(Citas, {
    as: "Cita",
    foreignKey: "UidNegocio"
  });
  Citas.belongsTo(Usuarios, {
    as: "UidUsuarioUsuario",
    foreignKey: "UidUsuario"
  });
  Usuarios.hasMany(Citas, {
    as: "Cita",
    foreignKey: "UidUsuario"
  });
  Configuracion.belongsTo(Negocios, {
    as: "UidNegocioNegocio",
    foreignKey: "UidNegocio"
  });
  Negocios.hasOne(Configuracion, {
    as: "Configuracion",
    foreignKey: "UidNegocio"
  });
  Detalle.belongsTo(Citas, {
    as: "IdCitaCita",
    foreignKey: "IdCita"
  });
  Citas.hasMany(Detalle, {
    as: "Detalles",
    foreignKey: "IdCita"
  });
  Detalle.belongsTo(Servicios, {
    as: "IdServicioServicio",
    foreignKey: "IdServicio"
  });
  Servicios.hasMany(Detalle, {
    as: "Detalles",
    foreignKey: "IdServicio"
  });
  Direcciones.belongsTo(Negocios, {
    as: "UidNegocioNegocio",
    foreignKey: "UidNegocio"
  });
  Negocios.hasOne(Direcciones, {
    as: "Direccione",
    foreignKey: "UidNegocio"
  });
  InfContato.belongsTo(Negocios, {
    as: "UidNegocioNegocio",
    foreignKey: "UidNegocio"
  });
  Negocios.hasOne(InfContato, {
    as: "InfContato",
    foreignKey: "UidNegocio"
  });
  Negocios.belongsTo(Usuarios, {
    as: "UidUsuarioUsuario",
    foreignKey: "UidUsuario"
  });
  Usuarios.hasMany(Negocios, {
    as: "Negocios",
    foreignKey: "UidUsuario"
  });
  Servicios.belongsTo(Negocios, {
    as: "UidNegocioNegocio",
    foreignKey: "UidNegocio"
  });
  Negocios.hasMany(Servicios, {
    as: "Servicios",
    foreignKey: "UidNegocio"
  });
  return {
    Accesos: Accesos,
    Citas: Citas,
    Configuracion: Configuracion,
    Detalle: Detalle,
    Direcciones: Direcciones,
    InfContato: InfContato,
    Negocios: Negocios,
    Servicios: Servicios,
    Usuarios: Usuarios
  };
}