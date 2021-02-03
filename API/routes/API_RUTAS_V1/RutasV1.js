"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RutasV1;

function RutasV1(router, control) {
  // * rutas de instancia
  var RI = router();
  var todos = control.todos,
      crear = control.crear,
      eliminar = control.eliminar,
      actualizar = control.actualizar,
      buscarUnoX = control.buscarUnoX,
      buscarMuchosX = control.buscarMuchosX,
      buscarXpk = control.buscarXpk,
      vistaTodos = control.vistaTodos,
      test = control.test; // * get

  RI.get("/todos", todos);
  RI.get("/buscarPorPk/:id", buscarXpk);
  RI.get("/buscarUnoPorLike/:dato", buscarUnoX);
  RI.get("/buscarMuchosPorLike/:dato", buscarMuchosX);
  RI.get("/vista", vistaTodos); // * post

  RI.post("/ingresar", crear); // * put

  RI.put("/actualizar", actualizar); // * delete

  RI["delete"]("/eliminar/:id", eliminar);
  RI.get("/test", test);
  return RI;
}