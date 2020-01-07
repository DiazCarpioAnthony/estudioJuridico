"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriaController_1 = require("../controllers/categoriaController");
class CategoriaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', categoriaController_1.categoriaController.list);
        this.router.get('/:id', categoriaController_1.categoriaController.getOne);
        this.router.post('/register', categoriaController_1.categoriaController.create);
        this.router.put('/:id', categoriaController_1.categoriaController.update);
        this.router.delete('/:id', categoriaController_1.categoriaController.delete);
    }
}
const categoriaRoutes = new CategoriaRoutes();
exports.default = categoriaRoutes.router;
