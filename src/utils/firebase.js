// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {addDoc, updateDoc, collection, doc, getDocs, getFirestore, query, setDoc, where, and} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFrFU7q7WoWAQbj_MDHkid7qQB1jSA7XE",
    authDomain: "gift-service-5338e.firebaseapp.com",
    projectId: "gift-service-5338e",
    storageBucket: "gift-service-5338e.appspot.com",
    messagingSenderId: "1084345959056",
    appId: "1:1084345959056:web:2a4e293b948de9ca504e15",
    measurementId: "G-ZNFW1S3H3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function findWhere(tableName, whereField, whereOpt, whereValue) {
    const q = query(collection(db, tableName), where(whereField, whereOpt, whereValue));
    const querySnapshot = await getDocs(q);
    let res = [];
    querySnapshot.forEach((doc) => {
        res.push(doc.data());
    });
    return res;
}

export async function findWithNWhere(tableName, whereArr) {
    const q = query(collection(db, tableName), ...whereArr);
    const querySnapshot = await getDocs(q);
    let res = [];
    querySnapshot.forEach((doc) => {
        console.log("doc :: ",doc.data())
            res.push(doc.data());
        }
    );
    return res;
}

export const updateProductCart = async (tableName, data) =>{
    try{

    }
    catch {

    }
}

export const addProduct = async (tableName, data) => {
    try{
        
        const cartProduct = collection(db, 'cart')
        
        const productPresent = query(cartProduct , and(where('productId', '==' , data.productId), where('id', '==', data.id)))
        
        const querySnapshot = await getDocs(productPresent);
        let id;
        let number;
        querySnapshot.docs.map((doc)=>{
            console.log("doc data :: ",doc.data(), doc.id)
            number = doc.data().quantity;
            id = doc.id;
        })
        console.log("vbdhfkbvkjdfnvjkdjkn")
        console.log("hdvkfhdhvfgkjvbhfg",querySnapshot.docs);
        if(querySnapshot.docs.length > 0){
                const docRef = doc(db, "cart", id);
                data.quantity = data.quantity + number;
                await updateDoc(docRef, data).then();
        }
        else{
            let response  = await addDoc(collection(db, tableName), data).then();
        }
        
        // console.log("reso :: ",response)
    }
    catch (err){
            console.log("error comes", err);
    }
}

export const addData = async (tableName, data) => {
    try {
        let response  =await addDoc(collection(db, tableName), data).then();
    } catch (err) {
        console.log(err)
        return false
    }
    return true;
}
