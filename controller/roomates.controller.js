import { roomatesModel } from "../models/roomates.model.js";

 const todosRoomates = async(req, res) =>{
    try {
        const roommates = await roomatesModel.all();
        return res.json({roommates});
    } catch (error) {
        console.error(error)
        res.json( { ok: false,  error });
    }
}

const unRoomate = async (req, res) => {
    try {

        const { id } = req.params
        const roomate = await roomatesModel.uno(id)
        return res.json({roomate})

    }catch (error) {
        console.log(error)
        res.json({ok: false, error})
    }
}

const agregarRoomate = async (req, res) => {
    try{

        const roomate = await roomatesModel.agregar()
        return res.json({roomate})

    }catch(error){
        console.log(error)
        res.json({ok: false, error})
    }
}


export const roomatesController = {
   todosRoomates,
   unRoomate,
   agregarRoomate
}