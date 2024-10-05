import { Router } from "express";
import { metodosPokemones } from "../controlers/pokemones.controles.js";
const router = Router();

// Routes

router.get("/pokemones",metodosPokemones.getpokemones);
router.get("/adios",metodosPokemones.getdespedida);

export default router;