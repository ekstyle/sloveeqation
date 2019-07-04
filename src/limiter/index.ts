import { Limiter } from './limiter';
import { runInNewContext } from 'vm';
import { Request, Response, NextFunction } from 'express';

const tooManyRequestsCode = 429;
const tooManyRequestsMsg = 'Too Many Requests';
export function limitRequest(connectionLimit: number) {
  const limit = new Limiter(connectionLimit);
  return (req: Request, res: Response, next: NextFunction) => {
    if (limit.newConnection()) {
      req.on('close', () => {
        // Test limitation service
        setTimeout(() => {
          limit.closeConnection();
        }, 10000);
      });
      next();
    } else {
      res.status(tooManyRequestsCode).send(tooManyRequestsMsg);
    }
  };
}
