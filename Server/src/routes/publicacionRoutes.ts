import { Router } from 'express';
import { publicacionController } from '../controllers/publicacionController';


class PublicacionRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', publicacionController.index );
    }

}

const publicacionRoutes = new PublicacionRoutes();

export default publicacionRoutes.router; 