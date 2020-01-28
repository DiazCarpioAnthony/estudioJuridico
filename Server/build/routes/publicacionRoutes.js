"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publicacionController_1 = require("../controllers/publicacionController");
class PublicacionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/last', publicacionController_1.publicacionController.getLastIdPublicacion);
        this.router.get('/ultimas', publicacionController_1.publicacionController.getUltimas);
        this.router.get('/byCategoria/:id', publicacionController_1.publicacionController.byCategoria);
        this.router.get('/:id', publicacionController_1.publicacionController.getOne);
        this.router.get('/', publicacionController_1.publicacionController.list);
        this.router.post('/create', publicacionController_1.publicacionController.createPublicacion);
        this.router.post('/:id', publicacionController_1.publicacionController.addKeyword);
        this.router.put('/:id', publicacionController_1.publicacionController.update);
        this.router.delete('/:id', publicacionController_1.publicacionController.delete);
        this.router.delete('/keywordsOfPublicacion/:id', publicacionController_1.publicacionController.deleteKeywords);
    }
}
const publicacionRoutes = new PublicacionRoutes();
exports.default = publicacionRoutes.router;
