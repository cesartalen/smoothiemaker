import { NextFunction, Request, Response } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  let message = err.message || 'Something went wrong'
  let status = res.statusCode || 500

  res.status(status).json({ message })
}