"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const multer = require('multer');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const path = require('path');
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const publicacionRoutes_1 = __importDefault(require("./routes/publicacionRoutes"));
const categoriaRoutes_1 = __importDefault(require("./routes/categoriaRoutes"));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const multipartMiddleware = multer({ storage: storage });
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/api/user', loginRoutes_1.default);
        this.app.use('/api/publicaciones', publicacionRoutes_1.default);
        this.app.use('/api/categorias', categoriaRoutes_1.default);
        this.app.post('/api/upload', multipartMiddleware.array("uploads", 2), function (req, res) {
            res.json({
                'message': 'File uploaded succesfully.'
            });
        });
        this.app.post('/api/download', function (req, res, next) {
            return __awaiter(this, void 0, void 0, function* () {
                var filepath = path.join(__dirname, '../uploads') + '/' + req.body.filename;
                res.sendfile(filepath);
            });
        });
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
