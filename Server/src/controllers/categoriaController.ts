import { Request, Response } from 'express';
import pool from '../database';


class CategoriaController {

    public async list(req: Request, res: Response): Promise<void> {
        
        const categorias = await pool.query('SELECT * FROM categoria');
        
        res.json(categorias);
    }

    public async getOne(req: Request, res: Response): Promise<void> {

        const { id } = req.params;
        const categorias = await pool.query('select * from categoria where id_categoria = ?', id);
        if (categorias == null) {
            res.status(404);
        }

        res.json(categorias);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO categoria set ?', [req.body]);
        res.json(
            {
                'text': 'Creando'
            }
        );
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE categoria set ? WHERE id_categoria = ?', [req.body, id]);
        res.json(
            {
                'text': 'Actualizando'
            }
        );
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM categoria WHERE id_categoria = ?', [id]);
        res.json(
            {
                'text': 'Borranod'
            }
        );
    }
}

export const categoriaController = new CategoriaController();
