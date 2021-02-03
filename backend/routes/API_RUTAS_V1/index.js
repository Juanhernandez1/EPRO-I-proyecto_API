import RutasV1 from "./RutasV1";

export default function RV1(router, controllers) {
  // *Ruta modelo
  const RM = router();
  const { Usuarios, Login, Accesos } = controllers;

  RM.use("/Usuarios", RutasV1(router, Usuarios));
  RM.use("/Accesos", RutasV1(router, Accesos));

  return RM;
}
