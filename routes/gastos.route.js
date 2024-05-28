import { Router } from "express";
import { gastosController } from "../controller/gastos.controller.js";

const router = Router()

router.get('/', gastosController.gastosTodos)
router.get('/:id', gastosController)
router.post('/')
router.put('/')
router.delete('/')

export default router; 