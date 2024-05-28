import { Router } from "express";
import { roomatesController } from "../controller/roomates.controller.js";

const router = Router()

router.get('/', roomatesController.todosRoomates)
router.get('/:id', roomatesController.unRoomate)
router.post('/', roomatesController.agregarRoomate)



export default router; 