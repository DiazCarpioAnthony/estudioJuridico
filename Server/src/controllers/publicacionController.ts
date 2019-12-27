import { Request, Response } from 'express';


class PublicacionController {

    public index (req: Request, res: Response) {
        res.send('Hello')
    }

}

export const publicacionController = new PublicacionController();