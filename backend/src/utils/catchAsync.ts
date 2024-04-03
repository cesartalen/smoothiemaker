import { NextFunction } from 'express'

// Catch-async errors and then pass them to the error handling middleware
export const catchAsync = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next)
  }
}