import { generateToken } from "../utils/token-generator.js";
import * as userService from '../services/users.service.js';
import * as sessionService from '../services/sessions.service.js';

export async function login(req, res) {
    const { email, password } = req.body;

    const users = await userService.getAllUsers();
    const user = users.find(u => u.email === email && u.password === password) || null;
    if(!user){
        return res.status(401).json({ message: 'Credenciales invalidas' });
    }else{
        const token = generateToken(user);
        const sessionData = {
            idUser: user.id,
            token: token
        };

        await sessionService.createSession(sessionData);
        res.json({ token, user });
    }
}

export async function logout(req, res) {
    const token = req.params.token;
    const sessions = await sessionService.getAllSessions();

    const session = sessions.find(s => s.token === token);
    if(!session){
        return res.status(404).json({ message: 'Sesion no encontrada' });
    } else {
        const sessionId = session.id;
        await sessionService.deleteSession(sessionId);
        res.status(200).json({ message: 'Cierre de sesion exitoso' });
    }
}

export async function getAllSessions(req, res) {
    const sessions = await sessionService.getAllSessions();
    res.status(200).json(sessions);
}