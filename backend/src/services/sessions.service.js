import * as sessionModels from '../models/sessions.model.js';

export const createSession = async (sessionData) => {
    const createSession = await sessionModels.createSession(sessionData);
    return createSession;
}

export const getSessionByToken = async (token) => {
    const session = await sessionModels.getSessionByToken(token);
    return session;
}

export const getAllSessions = async () => {
    const sessions = await sessionModels.getAllSessions();
    return sessions;
}

export const deleteSession = async (id) => {
    await sessionModels.deleteSession(id);
}