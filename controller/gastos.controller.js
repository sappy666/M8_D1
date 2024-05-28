import { gastosModel } from "../models/gatos.model.js";


const gastosTodos = async (req, res) => {
    try{
        const gastos = await gastosModel.todoGastos()
        return res.json({gastos})

    }catch (error) {
        console.log(error)
        res.json({ok: false, error})
    } 
}



export const gastosController = {
    gastosTodos,
}