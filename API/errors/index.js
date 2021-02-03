"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _MensajeError = _interopRequireDefault(require("./MensajeError"));

var ER404 = _MensajeError["default"].ER404,
    ER500 = _MensajeError["default"].ER500;

var ErrorServer = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, req, res, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get("env") === "development" ? err : {};
            _context.next = 4;
            return res.status(err.status || 500);

          case 4:
            if (!(err.status === 404)) {
              _context.next = 9;
              break;
            }

            _context.next = 7;
            return res.send(ER404);

          case 7:
            _context.next = 12;
            break;

          case 9:
            if (!(err.status === 500)) {
              _context.next = 12;
              break;
            }

            _context.next = 12;
            return res.send(ER500);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function ErrorServer(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

var _default = ErrorServer;
exports["default"] = _default;