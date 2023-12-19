import express from "express";
import { getEquipamentos, getEquipamentoById, getEquipamentoByPlaca, getEquipamentoByModelo , getEquipamentoByAno , addEquipamentos, updateEquipamento, deleteEquipamento  } from "../controllers/equipamento.js";

const router = express.Router()

router.get("/", getEquipamentos)

router.get("/:id", getEquipamentoById)

router.get("/placa/:placa", getEquipamentoByPlaca)

router.get("/modelo/:modelo", getEquipamentoByModelo)

router.get("/ano/:ano", getEquipamentoByAno)

router.post("/", addEquipamentos)

router.put("/:id", updateEquipamento)

router.delete("/:id", deleteEquipamento)

export default router