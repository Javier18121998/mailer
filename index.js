import express  from "express";
import path from 'path'
const app = express()
app.use(express.json())
app.use(express.static('app'))
app.get('/', (req, res) =>{
    res.sendFile(`${path.resolve()}/index.html`)
})
app.listen(3000, ()=> console.log('la app está corriendo'))