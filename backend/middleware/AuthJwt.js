import controllers from "../controllers";
import Token from "./services/Token";
import MensajeError from "../errors/MensajeError";

const { ER401, ER403, ER500, ERMET_PATH } = MensajeError;
const { login } = controllers;

const { getUsuarioId } = login;
const { decodeToken } = Token;

const AuthJwt = async (req, res, next) => {
  const cookie = await req.cookies.cookiauth;
  if (cookie !== undefined) {
    const datosCookie = JSON.parse(cookie);
    if (datosCookie.auth === true) {
      const usuario = decodeToken(datosCookie.token);
      const obj = await getUsuarioId(usuario.sub);

      if (obj.dataValues) {
        next();
      }
    } else {
      await res.status(401).send(ER401);
    }
  } else {
    await res.status(401).send(ER401);
  }
};

export default AuthJwt;
