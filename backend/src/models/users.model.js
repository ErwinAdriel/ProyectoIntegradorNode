import { db } from "../data/data.js";
import{
    collection, 
    getDocs,
} from "firebase/firestore";

const usersCollection = collection (db, 'users');

export async function getAllUsers() {
    const querySnapshot = await getDocs(usersCollection);
    const users = [];
    querySnapshot.forEach((doc) => {
        users.push({id: doc.id, ...doc.data()})
    })
    return users;
}