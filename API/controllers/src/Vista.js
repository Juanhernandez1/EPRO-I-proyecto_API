"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Vista;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// * retorna un areglo donde cada item en un único objeto para la vista
function Vista(data, Where) {
  var vista = [];
  data.forEach(function (element) {
    var objetopadre = _objectSpread({}, element);

    var result = {};
    Object.keys(objetopadre).forEach(function (valuep) {
      if ((0, _typeof2["default"])(objetopadre[valuep]) === "object") {
        var objetohijo = _objectSpread({}, objetopadre[valuep]);

        Object.keys(objetohijo).forEach(function (valueh) {
          result[valueh] = objetohijo[valueh];
        });
      } else if (Where.indexOf(valuep) < 1) {
        result[valuep] = objetopadre[valuep];
      }
    });
    vista.push(result);
  });
  return vista;
}