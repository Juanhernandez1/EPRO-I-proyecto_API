export default function Rutass(router, control) {
  const { todos, create, eliminar, actualizar, findOneLike, getOne } = control;

  // * get
  router.get("/todos", todos);
  router.get("/buscarPorId/:id", getOne);
  router.get("/buscarPorLike/:dato", findOneLike);
  // * post
  router.post("/ingresar", create);
  // * put
  router.put("/actualizar", actualizar);
  // * delete
  router.delete("/eliminar/:id", eliminar);

  return router;
}
