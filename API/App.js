"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _express = _interopRequireWildcard(require("express"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _passport = _interopRequireDefault(require("passport"));

var _passportFacebook = require("passport-facebook");

var _errors = _interopRequireDefault(require("./errors"));

var _Login = _interopRequireDefault(require("./routes/Login"));

var _FBConfiguracion = _interopRequireDefault(require("./controllers/src/FBConfiguracion"));

var _routes = _interopRequireDefault(require("./routes"));

// // import { join } from 'path';
// * login con facebook
// * Controlador de errores
(0, _dotenv.config)();
var FacebookStrategy = _passportFacebook.Strategy;
/**
 * * Se utiliza express-generator
 * * El Cual Contiene Algunas Configuraciones Predeterminadas
 * ! de las cuales se eliminan las que no se están usando
 */

var app = (0, _express["default"])();
/**
 * ? Motor de Visualización
 * // app.set('views', join(__dirname, 'views'));
 * // app.set('view engine', 'jade');
 */

app.use((0, _morgan["default"])("dev"));
app.use((0, _express.json)());
app.use((0, _express.urlencoded)({
  extended: false
}));
app.use((0, _cookieParser["default"])());
/**
 * ? Ubicación de las Vistas que Cargaría el Motor de Visualización
 * // // app.use(express.static(path.join(__dirname, "public")));
 */

/**
 * * Accesp con facebook
 */

app.use((0, _expressSession["default"])({
  resave: false,
  saveUninitialized: true,
  secret: process.env.SECRET_TOKEN
}));

_passport["default"].serializeUser(function (user, done) {
  done(null, user);
});

_passport["default"].deserializeUser(function (obj, done) {
  done(null, obj);
});

_passport["default"].use(new FacebookStrategy({
  clientID: _FBConfiguracion["default"].facebookAuth.clientID,
  clientSecret: _FBConfiguracion["default"].facebookAuth.clientSecret,
  callbackURL: _FBConfiguracion["default"].facebookAuth.callbackURL,
  profileFields: ["email", "name"]
}, function (accessToken, refreshToken, profile, done) {
  console.log(profile);
  done(null, profile);
}));
/**
 * * Creando Endpoint
 */


app.use("/API", _routes["default"]);
app.use("/API", _Login["default"]);
/**
 * * Captura las solicitudes no encontradas en los Endpoint
 * * enviando un error 404 al controlador de errores
 */

app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404));
});
/**
 * * Controlador de Errores
 */

app.use(_errors["default"]);
var _default = app;
exports["default"] = _default;