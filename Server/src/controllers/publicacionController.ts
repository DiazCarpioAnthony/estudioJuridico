import { Request, Response } from 'express';
import pool from '../database';


class PublicacionController {

    public async list(req: Request, res: Response): Promise<void> {

        const publicaciones = await pool.query('select * from publicacion join categoria ON publicacion.id_categoria = categoria.id_categoria join keyword_has_publicacion ON publicacion.id_publicacion = keyword_has_publicacion.id_publicacion join keyword ON keyword_has_publicacion.id_keyword = keyword.id_keyword ');

        res.json(publicaciones);
    }

    public async getLastIdPublicacion(req: Request, res: Response): Promise<void> {

        const publicaciones = await pool.query('select max(id_publicacion) AS lastId from publicacion order by id_publicacion desc ');
        res.json(publicaciones);
    }


    public async getOne(req: Request, res: Response): Promise<void> {


        const { id } = req.params;

        const publicacion = await pool.query('select * from publicacion join categoria ON publicacion.id_categoria = categoria.id_categoria join keyword_has_publicacion ON publicacion.id_publicacion = keyword_has_publicacion.id_publicacion join keyword ON keyword_has_publicacion.id_keyword = keyword.id_keyword where publicacion.id_publicacion = ?', [id]);
        //console.log(usuarios[0].password);
        if (publicacion == null) {
            res.status(404);
        }

        res.json(publicacion);


    }
    //FUNCIONAN AMBOS PERO DEBEN HACERSE SECUENCIAL
    public async createPublicacion(req: Request, res: Response): Promise<void> {
        
        var sql="INSERT INTO publicacion (title, description, image, resumen, id_categoria) VALUES (' " + req.body.title + " ',' " + req.body.description + " ',' "+ req.body.image  + " ',' "+ req.body.resumen  + " ',' "+ req.body.id_categoria +" ' )";
        await pool.query(sql);

        res.json(
            {
                'text': 'Creando'
            }
        );
    }

    public async addKeyword(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        var sql="INSERT INTO keyword_has_publicacion (id_keyword, id_publicacion) VALUES (' " + req.body.id_keyword + " ',' " + id + " ' )";
        await pool.query(sql);
        res.json(
            {
                'text': 'Creando'
            }
        );
    }


    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE publicacion set ? WHERE id_publicacion = ?', [req.body, id]);
        res.json(
            {
                'text': 'Actualizando'
            }
        );
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM publicacion WHERE id_publicacion = ?', [id]);
        res.json(
            {
                'text': 'Borrando'
            }
        );
    }
}

export const publicacionController = new PublicacionController();
