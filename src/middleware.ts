import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config';

// Extend Express Request to include userId
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

interface JwtPayload {
  id: string;
  // Add other properties you might have in your JWT
}

export const userMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers["authorization"];

  if (!token) {
    res.status(403).json({ message: 'Authorization token not provided' });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
  }
};
