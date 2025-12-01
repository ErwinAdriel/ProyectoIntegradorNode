import { db } from "../data/data.js";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
} from "firebase/firestore";

const productsCollection = collection(db, 'products');

export async function getProductById(id) {
    const productDoc = await getDoc(doc(productsCollection, id));
    if(productDoc.exists()){
        return productDoc.data();
    } else {
        return null;
    }
}

export async function getAllProducts() {
    const querySnapshot = await getDocs(productsCollection);
    const products = [];
    querySnapshot.forEach((doc)=> {
        products.push( {id: doc.id, ...doc.data() });
    });
    return products;
}

export async function createProduct(product) {
    await addDoc(productsCollection, product);
}

export async function updateProduct(id, productData) {
    const productRef = doc(productsCollection, id);
    const productDoc = await getDoc(productRef);

    if(!productDoc.exists()){
        return null;
    }

    await updateDoc(productRef, productData);

    return{ id, ...productDoc.data(), ...productData };
}

export async function deleteProduct(id) {
    await deleteDoc(doc(productsCollection, id)); 
}
