"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class PublicacionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Publicacion'));
    }
}
const publicacionRoutes = new PublicacionRoutes();
exports.default = publicacionRoutes.router;
