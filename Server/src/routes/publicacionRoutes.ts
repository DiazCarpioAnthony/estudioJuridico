import { Router } from 'express';
import { publicacionController } from '../controllers/publicacionController';


class PublicacionRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/last', publicacionController.getLastIdPublicacion );
        this.router.get('/ultimas', publicacionController.getUltimas );
        this.router.get('/byCategoria/:id', publicacionController.byCategoria );
        this.router.get('/:id', publicacionController.getOne );
        this.router.get('/', publicacionController.list );
        this.router.post('/create', publicacionController.createPublicacion );
        this.router.post('/:id', publicacionController.addKeyword );
        this.router.put('/:id', publicacionController.update );
        this.router.delete('/:id', publicacionController.delete );
        this.router.delete('/keywordsOfPublicacion/:id', publicacionController.deleteKeywords );
    }

}

const publicacionRoutes = new PublicacionRoutes();

export default publicacionRoutes.router; 