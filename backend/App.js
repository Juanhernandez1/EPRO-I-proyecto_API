import { config } from "dotenv";
import createError from "http-errors";
import express, { json, urlencoded } from "express";
import session from "express-session";
// // import { join } from 'path';
import cookieParser from "cookie-parser";
import logger from "morgan";
// * login con facebook
import passport from "passport";
import { Strategy } from "passport-facebook";
// * Controlador de errores

import ErrorServer from "./errors";
import LoginRouter from "./routes/Login";
import configuracion from "./controllers/src/FBConfiguracion";
import API from "./routes";

config();
const FacebookStrategy = Strategy;

/**
 * * Se utiliza express-generator
 * * El Cual Contiene Algunas Configuraciones Predeterminadas
 * ! de las cuales se eliminan las que no se están usando
 */
const app = express();

/**
 * ? Motor de Visualización
 * // app.set('views', join(__dirname, 'views'));
 * // app.set('view engine', 'jade');
 */

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * ? Ubicación de las Vistas que Cargaría el Motor de Visualización
 * // // app.use(express.static(path.join(__dirname, "public")));
 */

/**
 * * Accesp con facebook
 */
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SECRET_TOKEN
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: configuracion.facebookAuth.clientID,
      clientSecret: configuracion.facebookAuth.clientSecret,
      callbackURL: configuracion.facebookAuth.callbackURL,
      profileFields: ["email", "name"]
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      done(null, profile);
    }
  )
);

/**
 * * Creando Endpoint
 */

app.use("/API", API);
app.use("/API", LoginRouter);

/**
 * * Captura las solicitudes no encontradas en los Endpoint
 * * enviando un error 404 al controlador de errores
 */

app.use((req, res, next) => {
  next(createError(404));
});

/**
 * * Controlador de Errores
 */

app.use(ErrorServer);

export default app;
