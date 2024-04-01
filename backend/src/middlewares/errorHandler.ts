import { NextFunction, Request, Response } from 'express'
import { CustomErrorType } from '../utils/customError.js'

export const errorHandler = (err: CustomErrorType, req: Request, res: Response, next: NextFunction) => {
  let message = err.message || 'Something went wrong'
  let status = err.status || 500
  res.status(status).json({ message })
}