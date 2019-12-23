import { Router } from 'express';

class PublicacionRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('Publicacion'));
    }

}

const publicacionRoutes = new PublicacionRoutes();

export default publicacionRoutes.router; 