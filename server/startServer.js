import { app } from "../app.js";
import dotenv from 'dotenv'
dotenv.config()

function startServer()
{
    app.listen(process.env.PORT,()=>{
        console.log(`Serwer słucha na porcei ${process.env.PORT}...`)
    })
}

export default startServer