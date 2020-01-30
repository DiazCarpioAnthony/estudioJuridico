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
        await pool.query('INSERT INTO keyword set ?', [req.body]);
        res.json(
            {
                'text': 'Creando'
            }
        );
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE keyword set ? WHERE id_keyword = ?', [req.body, id]);
        res.json(
            {
                'text': 'Actualizando'
            }
        );
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM keyword WHERE id_keyword = ?', [id]);
        res.json(
            {
                'text': 'Borrando'
            }
        );
    }
}

export const keywordController = new KeywordController();
