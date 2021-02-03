import { encode, decode } from "jwt-simple";
import moment from "moment";

import { config } from "dotenv";

config();

function createToken(data) {
  const { UidUsuario } = data;
  const payload = {
    sub: UidUsuario,
    iat: moment().unix(),
    exp: moment().add(1, "days").unix()
  };
  return encode(payload, process.env.SECRET_TOKEN);
}

function decodeToken(token) {
  const decoded = decode(token, process.env.SECRET_TOKEN);
  if (decoded.exp <= moment().unix()) {
    return "expirado";
  }
  return decoded;
}

export default {
  createToken,
  decodeToken
};
