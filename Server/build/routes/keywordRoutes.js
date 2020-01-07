"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const keywordController_1 = require("../controllers/keywordController");
class KeywordRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', keywordController_1.keywordController.list);
        this.router.get('/:id', keywordController_1.keywordController.getOne);
        this.router.post('/register', keywordController_1.keywordController.create);
        this.router.put('/:id', keywordController_1.keywordController.update);
        this.router.delete('/:id', keywordController_1.keywordController.delete);
    }
}
const keywordRoutes = new KeywordRoutes();
exports.default = keywordRoutes.router;
