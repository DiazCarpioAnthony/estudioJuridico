import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
const multer = require('multer');

const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

import loginRoutes from './routes/loginRoutes';
import publicacionRoutes from './routes/publicacionRoutes';
import categoriaRoutes from './routes/categoriaRoutes';


const storage = multer.diskStorage({
    destination: function (req:any , file:any, cb:any) {
        cb(null, './uploads/');
    },
    filename: function (req:any, file:any, cb:any) {
        cb(null, file.originalname);
    }    
});
const multipartMiddleware = multer({ storage: storage });

class Server {

    public app: Application;
    

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes(): void {
        this.app.use('/api/user', loginRoutes);
        this.app.use('/api/publicaciones', publicacionRoutes);
        this.app.use('/api/categorias', categoriaRoutes);
        this.app.post('/api/upload', multipartMiddleware.array("uploads",2), function(req, res) 
        {
            res.json({
                'message': 'File uploaded succesfully.'
            });
        });
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }

}

const server = new Server();

server.start();