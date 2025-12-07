import { db } from "../data/data.js";
import{
    collection,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    query,
    getDocs,
    where
} from "firebase/firestore";

const sessionsCollection = collection (db, 'sessions');

export async function createSession(sessionData) {
    await addDoc(sessionsCollection, sessionData);
}

export async function getSessionByToken(token){
    const query = query(sessionsCollection, where('token', '==', token));
    const sessionDoc = await getDoc(q);
    return sessionDoc.data();
}
export async function getAllSessions(){
    const sessionsSnapshot = await getDocs(sessionsCollection);
    const sessions = [];
    sessionsSnapshot.forEach((doc) => {
        sessions.push({ id: doc.id, ...doc.data() });
    });
    return sessions;
}
export async function deleteSession(id) {
    await deleteDoc(doc(sessionsCollection, id));
}