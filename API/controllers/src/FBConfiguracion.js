"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var configuracion = {
  facebookAuth: {
    clientID: process.env.FB_ID_APP,
    clientSecret: process.env.FB_SECRET_PASS,
    // your App Secret
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  }
};
var _default = configuracion;
exports["default"] = _default;