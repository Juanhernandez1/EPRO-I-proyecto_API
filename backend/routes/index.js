import { Router } from "express";
import Versiones from "./Versiones";
import controllers from "../controllers";

const Rutas = Router();

const objVersion = Versiones(Router, controllers);

const { RutasV1 } = objVersion;
// * ruta de version
Rutas.use("/v1", RutasV1);

export default Rutas;
