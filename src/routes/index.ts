import { Router } from 'express';
import { Request, Response } from 'express';
import logger from '../utils/logger';

const router = Router();

router.get('/players', (req: Request, res: Response): void => {
  logger.info('Fetching players...');
  res.send('Fetching players...');
});

export default router;
