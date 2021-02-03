import V1 from "./API_RUTAS_V1";

export default function Versiones(Rutas, controllers) {
  const RutasVersion = {
    RutasV1: V1(Rutas, controllers)
  };

  return RutasVersion;
}
