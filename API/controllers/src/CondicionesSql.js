"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CondicionesOR;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

// * retorna un arregló con las consultas like
function CondicionesOR(cond, buscar, Op) {
  var or = [];
  var condicionLike;
  cond.forEach(function (element) {
    condicionLike = (0, _defineProperty2["default"])({}, element, (0, _defineProperty2["default"])({}, Op.like, "%".concat(buscar, "%")));
    or.push(condicionLike);
  });
  return or;
}