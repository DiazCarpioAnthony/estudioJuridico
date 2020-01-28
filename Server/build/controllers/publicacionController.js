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
class PublicacionController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const publicaciones = yield database_1.default.query('select * from publicacion join categoria ON publicacion.id_categoria = categoria.id_categoria join keyword_has_publicacion ON publicacion.id_publicacion = keyword_has_publicacion.id_publicacion join keyword ON keyword_has_publicacion.id_keyword = keyword.id_keyword ');
            if (publicaciones == null) {
                res.status(404);
            }
            res.json(publicaciones);
        });
    }
    getLastIdPublicacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const publicaciones = yield database_1.default.query('select max(id_publicacion) AS lastId from publicacion order by id_publicacion desc ');
            if (publicaciones == null) {
                res.status(404);
            }
            res.json(publicaciones);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const publicaciones = yield database_1.default.query('select * from publicacion join categoria ON publicacion.id_categoria = categoria.id_categoria join keyword_has_publicacion ON publicacion.id_publicacion = keyword_has_publicacion.id_publicacion join keyword ON keyword_has_publicacion.id_keyword = keyword.id_keyword where publicacion.id_publicacion = ?', id);
            if (publicaciones == null) {
                res.status(404);
            }
            res.json(publicaciones);
        });
    }
    getUltimas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const publicacionesUltimas = yield database_1.default.query('select * from publicacion join categoria ON publicacion.id_categoria = categoria.id_categoria join keyword_has_publicacion ON publicacion.id_publicacion = keyword_has_publicacion.id_publicacion join keyword ON keyword_has_publicacion.id_keyword = keyword.id_keyword order by publicacion.fecha desc');
            if (publicacionesUltimas == null) {
                res.status(404);
            }
            res.json(publicacionesUltimas);
        });
    }
    //FUNCIONAN AMBOS PERO DEBEN HACERSE SECUENCIAL
    createPublicacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = "INSERT INTO publicacion (title, description, image, resumen, id_categoria) VALUES (' " + req.body.title + " ',' " + req.body.description + " ',' " + req.body.image + " ',' " + req.body.resumen + " ',' " + req.body.id_categoria + " ' )";
            yield database_1.default.query(sql);
            res.json({
                'text': 'Creando'
            });
        });
    }
    addKeyword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var sql = "INSERT INTO keyword_has_publicacion (id_keyword, id_publicacion) VALUES (' " + req.body.id_keyword + " ',' " + id + " ' )";
            yield database_1.default.query(sql);
            res.json({
                'text': 'Creando'
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE publicacion set ? WHERE id_publicacion = ?', [req.body, id]);
            res.json({
                'text': 'Actualizando'
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM publicacion WHERE id_publicacion = ?', [id]);
            res.json({
                'text': 'Borrando'
            });
        });
    }
    //PRUEBAS    23/01/2020
    deleteKeywords(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM keyword_has_publicacion WHERE id_publicacion = ?', [id]);
            res.json({
                'text': 'Borrando keywords'
            });
        });
    }
}
exports.publicacionController = new PublicacionController();
