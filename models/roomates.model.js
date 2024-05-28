import {Pool } from '../database/connection.js'
import axios from "axios";
import { v4 as uuidv4} from "uuid";
import path from 'path';
import { writeFile } from "fs";


const __dirname = import.meta.dirname

const todos = async() => {
    try{
        const file = await readFile(path.join(__dirname, '../database/roomates.json'))
        const jsonDaata = JSON.parse(file)
        return jsonDaata
    }catch(error) {
        console.log(error)
    }
}


const uno = async(id) => {
    try{
    const file = await readFile(path.join(__dirname, '../database/roomates.json'))
    const jsonData = JSON.parse(file)
    const roomate = jsonData.find(e === id)
    if(!roomate){
        throw {msg: 'El roomate no fue encontrado, por favor intente denuevo'}
    }
    return roomate

}catch (error) {
    console.log(error)
    }

}

const agregar = async () => {
    try {
        const file = await readFile(path.join(__dirname, '../database/roomates.json'))
        const jsonData = JSON.parse(file)

        const { data } = await axios.get('https://randomuser.me/api')

        if(!data){
            throw { msg: 'No se pudo agregar correctamente el nuevo roomate'}
        }
        jsonData.push({id: uuidv4(),name: data.results[0].name.first+' '+data.results[0].name.last,debit: 0 , income: 9999 });
        await writeFile(path.join(__dirname, '../datbase/rommates.json'), JSON.stringify(jsonData))
        return jsonData[jsonData.lenght-1]
   
    }catch(error){
        console.log(error)

    }
}

export const roomatesModel = {
    todos,
    uno,
    agregar

}