import 'dotenv/config';
import express from 'express';
import roomatesRouter from './routes/roomates.route.js'
import gastosRouter from './routes/gastos.route.js'
import cors from 'cors'; 

const app = express(); 

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use('/roomates', roomatesRouter)
app.use('/gastos', gastosRouter)




const PORT = process.env.PORT || 5115
app.listen(PORT, () => {
    console.log(`Puerto funcionando en http://localhost:${PORT}`)
})