import { Express } from 'express-serve-static-core';

declare global {
  namespace Express {
    interface Request {
      userId?: string; // Add userId property to the Request interface
    }
  }
}