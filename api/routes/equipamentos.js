import express from "express";
import { getEquipamentos } from "../controllers/equipamento.js";

const router = express.Router()

router.get("/", getEquipamentos)

export default router