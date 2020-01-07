import { Request, Response } from 'express';
import pool from '../database';


class AbogadoController {

    public async list(req: Request, res: Response): Promise<void> {
        
        const abogados = await pool.query('SELECT * FROM abogado');
        
        res.json(abogados);
    }

    public async getOne(req: Request, res: Response): Promise<void> {
        
        const { id } = req.params;
        
        const abogado = await pool.query('SELECT * FROM abogado WHERE id_abogado = ?', [id]);
        //console.log(usuarios[0].password);
        if (abogado == null) {
            res.status(404);
        }
        
        res.json(abogado);
        
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO abogado set ?', [req.body]);
        res.json(
            {
                'text': 'Creando'
            }
        );
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE abogado set ? WHERE id_abogado = ?', [req.body, id]);
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

export const abogadoController = new AbogadoController();
