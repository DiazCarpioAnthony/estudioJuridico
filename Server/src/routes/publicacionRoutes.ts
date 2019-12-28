import { Router } from 'express';
import { publicacionController } from '../controllers/publicacionController';


class PublicacionRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', publicacionController.list );
        this.router.get('/:id', publicacionController.getOne );
        this.router.post('/register', publicacionController.create );
        this.router.put('/:id', publicacionController.update );
        this.router.delete('/:id', publicacionController.delete );
    }

}

const publicacionRoutes = new PublicacionRoutes();

export default publicacionRoutes.router; 