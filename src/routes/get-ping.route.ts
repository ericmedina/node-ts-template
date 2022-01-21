import GetPingAction from '../actions/get-ping.action'
import { IGetPingResponse } from '../interfaces/get-ping/get-ping'
import express, { NextFunction, Request, Response } from 'express'

const HTTP_SUCCESS = 200
const router = express.Router()

router.get('/ping', (req: Request, res: Response, next: NextFunction) => {
    try{
        const response: IGetPingResponse = GetPingAction.invoke()
        res.status(HTTP_SUCCESS).send(response)
    }catch(error){
        next(error)
    }
})

export default router
