import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
const multer = require('multer');

const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const path = require('path');


import loginRoutes from './routes/loginRoutes';
import publicacionRoutes from './routes/publicacionRoutes';
import categoriaRoutes from './routes/categoriaRoutes';
import keywordRoutes from './routes/keywordRoutes';
import abogadoRoutes from './routes/abogadoRoutes';


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
        this.app.use('/api/keyword', keywordRoutes);
        this.app.use('/api/abogados', abogadoRoutes);
        this.app.post('/api/upload', multipartMiddleware.array("uploads",2), function(req, res) 
        {
            res.json({
                'message': 'File uploaded succesfully.'
            });
        });

        this.app.post('/api/download', async function(req, res, next) {
            var filepath = path.join(__dirname,'../uploads') + '/' + req.body.filename;
            res.sendfile(filepath);
        } );

    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }

}

const server = new Server();

server.start();