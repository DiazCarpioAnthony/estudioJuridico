"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const abogadoController_1 = require("../controllers/abogadoController");
class AbogadoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', abogadoController_1.abogadoController.list);
        this.router.get('/:id', abogadoController_1.abogadoController.getOne);
        this.router.post('/register', abogadoController_1.abogadoController.create);
        this.router.put('/:id', abogadoController_1.abogadoController.update);
        this.router.delete('/:id', abogadoController_1.abogadoController.delete);
    }
}
const abogadoRoutes = new AbogadoRoutes();
exports.default = abogadoRoutes.router;
