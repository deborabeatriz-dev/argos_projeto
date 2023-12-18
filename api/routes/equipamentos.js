import express from "express";
import { getEquipamentos, getEquipamentoById, addEquipamentos, updateEquipamento, deleteEquipamento  } from "../controllers/equipamento.js";

const router = express.Router()

router.get("/", getEquipamentos)

router.get("/:id", getEquipamentoById)

router.post("/", addEquipamentos)

router.put("/:id", updateEquipamento)

router.delete("/:id", deleteEquipamento)

export default router