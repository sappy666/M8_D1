import { read } from 'fs';
import { readFile, writeFile}  from 'fs/promises';
import path from 'path';

const __dirname = import.meta.dirname

const todoGastos = async () => {
    try {
        const file = await readFile(path.join(__dirname, '../database/gastos.json'))
        const jsonData = JSON.parse(file)

        if(!jsonData){
            throw{msg : 'No se pudo obtener información de los gastos'}
        }
        return jsonData
    }catch(error) {
        console.log(error)

    }
}

const unGasto = async (id) => {
    try {
        const file = await readFile(path.join(__dirname, '../database/gastos.json'))
        const jsonData = JSON.parse(file)
        const gasto = jsonData.find(e => parseInt(e.id) === id)

        if(!gasto) {
            throw {msg: 'No se pudo obtener información del gasto'}
        }
        return gasto
    }catch (error) {
        console.log(error)
    }
}

const agregarGasto = async({roomate_id, comentario, cantidad}) =>{
    try{
       const gastosFile = await readFile(path.join(__dirname, '../database/gastos.json'))
       const gastosData = JSON.parse(gastosFile)
       
       const roomateFile = await readFile(path.join(__dirname, '../database/roomates.json'))
       const roomateData = JSON.parse(roomateFile)

       roomateData.array.forEach(e =>{
        if(!e.id === roomate_id) {
            Object.assign(e, {debit: parseInt(e.debit)+parseInt(cantidad)})
        }
        })

        const gasto = { id: gastosData.length, roomate_id, comentario, cantidad}
        console.log(gasto)
        gastosData.push(gasto)

        await writeFile(path.join(__dirname, '../data/gastos.json'), JSON.stringify(gastosData))
        await writeFile(path.join(__dirname, '../data/roomates.json'), JSON.stringify(roomateData))

        return gastosData[gastosData.length-1]


    }catch (error){
        console.log(error)
    }
}

const actualizarGasto = async(id, {roomate_id, comentario, cantidad}) => {
    try{
        const gastosFile = await readFile

    }catch(error){
        console.log(error)
    }
}

export const gastosModel = {
    todoGastos, 
    unGasto,
    agregarGasto
}