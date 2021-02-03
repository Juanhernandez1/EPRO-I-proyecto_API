"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _sequelize = require("sequelize");

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var CnDb;

if (process.env.DATABASE_URL) {
  CnDb = new _sequelize.Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error

      }
    }
  });
} else {
  CnDb = new _sequelize.Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
    dialect: process.env.DB_DIALECT,
    protocol: process.env.DB_PROTOCOL,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error

      }
    }
  });
}

(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return CnDb.authenticate();

        case 3:
          console.log("Conexi\xF3n Establecida Satisfactoriamente. \uD83D\uDE80");
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error("No se puede conectar a la base de datos. \uD83D\uDE22");

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 6]]);
}))();

_sequelize.Sequelize.postgres.DECIMAL.parse = function (value) {
  return parseFloat(value);
};

function TestConect() {
  return _TestConect.apply(this, arguments);
}

function _TestConect() {
  _TestConect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return CnDb.authenticate();

          case 3:
            console.log("Conexi\xF3n Establecida Satisfactoriamente. \uD83D\uDE80");
            _context2.next = 9;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            console.error("No se puede conectar a la base de datos. \uD83D\uDE22");

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));
  return _TestConect.apply(this, arguments);
}

var _default = {
  CnDb: CnDb,
  Op: _sequelize.Op,
  TestConect: TestConect
};
exports["default"] = _default;