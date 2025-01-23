import { Request, Response, Router } from 'express';
import { getPlayerDetails } from '../services/playerService';

const router: Router = Router();

router.get('/:nickname', async (req: Request, res: Response): Promise<void> => {
  const { nickname } = req.params;

  try {
    const playerDetails: any = await getPlayerDetails(nickname);
    res.json(playerDetails);
  } catch (error) {
    const { message }: any = error;
    res.status(500).json({ error: message });
  }
});

export default router;
