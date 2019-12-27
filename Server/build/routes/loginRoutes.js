"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = require("../controllers/loginController");
class LoginRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/login', loginController_1.loginController.login);
        this.router.post('/register', loginController_1.loginController.create);
        this.router.put('/:id', loginController_1.loginController.update);
        this.router.delete('/:id', loginController_1.loginController.delete);
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;
