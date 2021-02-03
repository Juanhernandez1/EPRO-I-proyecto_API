import database from "../database";
import MensajeError from "../errors/MensajeError";
import initModels from "../model";
import CondicionesOR from "./src/CondicionesSql";
import Vista from "./src/Vista";
import ControladorCrud from "./ControladorCrud";
import ControladorLogin from "./ControladorLogin";

const { CnDb, TestConect, Op } = database;

const {
  Accesos,
  Citas,
  Configuracion,
  Detalle,
  Direcciones,
  InfContato,
  Negocios,
  Servicios,
  Usuarios
} = initModels(CnDb);

export default {
  Usuarios: ControladorCrud(Usuarios, Op),
  Accesos: ControladorCrud(Accesos, Op),
  Citas: ControladorCrud(Citas, Op),
  Login: ControladorLogin(Usuarios, Accesos)
};
