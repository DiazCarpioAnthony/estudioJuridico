import { Request, Response, request } from 'express';
import pool from '../database';


class LoginController {

    public async login(req: Request, res: Response): Promise<void> {
        
        const usuarios = await pool.query('SELECT password FROM usuarios WHERE email = ? AND password = ?', [req.body.email, req.body.password]);
        //console.log(usuarios[0].password);
        if (usuarios[0]) {
            res.json(
                {
                    'login': 'TRUE'
                });
        } else {
            res.json(
                {
                    'login': 'FALSE'
                });
        }
        
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

export const loginController = new LoginController();