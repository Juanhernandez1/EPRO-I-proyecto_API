import controllers from "../controllers";
import Token from "./services/Token";
import MensajeError from "../errors/MensajeError";

const { ERDBLOGIN } = MensajeError;

const { Login } = controllers;
const { getUsuario } = Login;
const { createToken } = Token;

const signIn = async (req, res, next) => {
  // * Creaa cookie para validar estado de logeo
  const cookie = await req.cookies.cookiauth;
  if (cookie === undefined) {
    await res.cookie("cookiauth", JSON.stringify({ auth: false }), {
      maxAge: 86400 * 1000, // 24 hours
      httpOnly: true // http only, prevents JavaScript cookie access
    });
  }
  const { Usuario, Contrasena } = req.body;
  const empleado = await getUsuario(Usuario, Contrasena);

  if (empleado !== "no acceso") {
    const token = createToken(empleado);
    await res.cookie("cookiauth", JSON.stringify({ auth: true, token }), {
      maxAge: 86400 * 1000, // 24 hours
      httpOnly: true // http only, prevents JavaScript cookie access
    });
    res.status(202).send({ mesage: "Se a iniciado Secion" });
  } else {
    await res.status(403).send(ERDBLOGIN);
  }
};

export default signIn;
