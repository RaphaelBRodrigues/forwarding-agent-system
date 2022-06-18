import { Request, Response } from 'express';

class DashboardController {
  store(req: Request, res: Response) {
    return res.json({});
  }
}

export default new DashboardController();
