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
const database_1 = __importDefault(require("../database"));
class AbogadoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const abogados = yield database_1.default.query('SELECT * FROM abogado');
            res.json(abogados);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const abogado = yield database_1.default.query('SELECT * FROM abogado WHERE id_abogado = ?', [id]);
            //console.log(usuarios[0].password);
            if (abogado == null) {
                res.status(404);
            }
            res.json(abogado);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO abogado set ?', [req.body]);
            res.json({
                'text': 'Creando'
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE abogado set ? WHERE id_abogado = ?', [req.body, id]);
            res.json({
                'text': 'Actualizando'
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM usuarios WHERE id_usuario = ?', [id]);
            res.json({
                'text': 'Borranod'
            });
        });
    }
}
exports.abogadoController = new AbogadoController();
