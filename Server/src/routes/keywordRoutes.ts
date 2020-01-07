import { Router } from 'express';
import { keywordController } from '../controllers/keywordController';


class KeywordRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', keywordController.list );
        this.router.get('/:id', keywordController.getOne );
        this.router.post('/register', keywordController.create );
        this.router.put('/:id', keywordController.update );
        this.router.delete('/:id', keywordController.delete );
    }

}

const keywordRoutes = new KeywordRoutes();

export default keywordRoutes.router; 