"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _sequelize = require("sequelize");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Detalle = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(Detalle, _Model);

  var _super = _createSuper(Detalle);

  function Detalle() {
    (0, _classCallCheck2["default"])(this, Detalle);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Detalle, null, [{
    key: "init",
    value: function init(sequelize, DataTypes) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Detalle), "init", this).call(this, {
        IdCita: {
          type: DataTypes.STRING(255),
          allowNull: false,
          references: {
            model: {
              tableName: "citas",
              schema: "public"
            },
            key: "id_cita"
          },
          field: "id_cita"
        },
        IdServicio: {
          type: DataTypes.STRING(255),
          allowNull: false,
          references: {
            model: {
              tableName: "servicios",
              schema: "public"
            },
            key: "id_servicio"
          },
          field: "id_servicio"
        }
      }, {
        sequelize: sequelize,
        tableName: "detalle",
        schema: "public",
        timestamps: false
      });
      return Detalle;
    }
  }, {
    key: "Setting",
    value: function Setting() {
      // * llave primaria
      var llavepk = this.primaryKeyAttributes[0]; // * Estado del registro

      var campoE = this.fieldAttributeMap.estado; // * objetos para comparacion

      var Mapobjeto1 = _objectSpread({}, this.fieldAttributeMap);

      var Mapobjeto2 = _objectSpread({}, this.fieldAttributeMap); // * Eliminados Campos


      Object.keys(Mapobjeto1).forEach(function (key) {
        if (Mapobjeto1[key] === "Estado" || Mapobjeto1[key] === llavepk || key.search("uid") === 0) {
          delete Mapobjeto1[key];
        }
      }); // * lista de campos que permitiran busqueda por like

      var whereLike = Object.values(Mapobjeto1); // * Eliminando Campos

      Object.keys(Mapobjeto2).forEach(function (key) {
        if (key.search("uid") !== 0) {
          delete Mapobjeto2[key];
        }
      }); // * lista de campos que permiten consultas and

      var whereAND = Object.values(Mapobjeto2); // * lista de tablas relacionadas

      var asocicion = Object.values(this.associations);
      return {
        campoPk: llavepk,
        asocicion: asocicion,
        condicion: {
          WhereLike: whereLike,
          WhereStado: {
            campoE: campoE,
            valor: "Activo",
            deleteR: "Despedido"
          },
          Where: whereAND,
          PkCombinado: false
        },
        vista: null
      };
    }
  }]);
  return Detalle;
}(_sequelize.Model);

exports["default"] = Detalle;