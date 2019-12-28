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
        this.router.get('/', publicacionController_1.publicacionController.list);
        this.router.get('/:id', publicacionController_1.publicacionController.getOne);
        this.router.post('/register', publicacionController_1.publicacionController.create);
        this.router.put('/:id', publicacionController_1.publicacionController.update);
        this.router.delete('/:id', publicacionController_1.publicacionController.delete);
    }
}
const publicacionRoutes = new PublicacionRoutes();
exports.default = publicacionRoutes.router;
