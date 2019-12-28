import { Router } from 'express';
import { categoriaController } from '../controllers/categoriaController';


class CategoriaRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', categoriaController.list );
        this.router.get('/:id', categoriaController.getOne );
        this.router.post('/register', categoriaController.create );
        this.router.put('/:id', categoriaController.update );
        this.router.delete('/:id', categoriaController.delete );
    }

}

const categoriaRoutes = new CategoriaRoutes();

export default categoriaRoutes.router; 