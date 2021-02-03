import { Router } from "express";
import passport from "passport";
import controllers from "../controllers";

const router = Router();
const { crearUsuario } = controllers.Login;
/* GET users listing. */
router.post("/SingUP", crearUsuario);

router.get(
  "/auth/facebook",
  passport.authenticate("facebook", {
    scope: ["public_profile", "email"]
  })
);

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/error"
  })
);

export default router;
