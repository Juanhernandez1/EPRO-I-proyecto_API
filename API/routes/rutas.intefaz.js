"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Rutass;

function Rutass(router, control) {
  var todos = control.todos,
      create = control.create,
      eliminar = control.eliminar,
      actualizar = control.actualizar,
      findOneLike = control.findOneLike,
      getOne = control.getOne; // * get

  router.get("/todos", todos);
  router.get("/buscarPorId/:id", getOne);
  router.get("/buscarPorLike/:dato", findOneLike); // * post

  router.post("/ingresar", create); // * put

  router.put("/actualizar", actualizar); // * delete

  router["delete"]("/eliminar/:id", eliminar);
  return router;
}