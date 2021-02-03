"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _passport = _interopRequireDefault(require("passport"));

var _controllers = _interopRequireDefault(require("../controllers"));

var router = (0, _express.Router)();
var crearUsuario = _controllers["default"].Login.crearUsuario;
/* GET users listing. */

router.post("/SingUP", crearUsuario);
router.get("/auth/facebook", _passport["default"].authenticate("facebook", {
  scope: ["public_profile", "email"]
}));
router.get("/auth/facebook/callback", _passport["default"].authenticate("facebook", {
  successRedirect: "/",
  failureRedirect: "/error"
}));
var _default = router;
exports["default"] = _default;