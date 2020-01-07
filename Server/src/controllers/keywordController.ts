import { Request, Response } from 'express';
import pool from '../database';


class KeywordController {

    public async list(req: Request, res: Response): Promise<void> {
        
        const categorias = await pool.query('SELECT * FROM keyword');
        
        res.json(categorias);
    }

    public async getOne(req: Request, res: Response): Promise<void> {
        
        const { id } = req.params;
        
        const keyword = await pool.query('SELECT * FROM keyword WHERE id_keyword = ?', [id]);
        //console.log(usuarios[0].password);
        if (keyword == null) {
            res.status(404);
        }
        
        res.json(keyword);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO usuarios set ?', [req.body]);
        res.json(
            {
                'text': 'Creando'
            }
        );
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE usuarios set ? WHERE id_usuario = ?', [req.body, id]);
        res.json(
            {
                'text': 'Actualizando'
            }
        );
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM usuarios WHERE id_usuario = ?', [id]);
        res.json(
            {
                'text': 'Borranod'
            }
        );
    }
}

export const keywordController = new KeywordController();
