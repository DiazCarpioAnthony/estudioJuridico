import { Router } from 'express';
import { abogadoController } from '../controllers/abogadoController';


class AbogadoRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', abogadoController.list );
        this.router.get('/:id', abogadoController.getOne );
        this.router.post('/register', abogadoController.create );
        this.router.put('/:id', abogadoController.update );
        this.router.delete('/:id', abogadoController.delete );
    }

}

const abogadoRoutes = new AbogadoRoutes();

export default abogadoRoutes.router; 