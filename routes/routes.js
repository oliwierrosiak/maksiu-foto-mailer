import express from 'express'
import Controller from '../controller/controller.js'

const router = new express.Router()

router.post('/message',Controller.message)

router.post('/calendar',Controller.calendar)

router.get("/",(req,res)=>{
    res.sendStatus(500)
})



export default router