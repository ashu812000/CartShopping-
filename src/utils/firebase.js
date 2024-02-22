// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {addDoc, collection, doc, getDocs, getFirestore, query, setDoc, where} from "firebase/firestore";

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

export const addData = async (tableName, data) => {

    try {
        let response  =await addDoc(collection(db, tableName), data).then();
        console.log("Response :: ",response)
    } catch (err) {
        console.log(err)
        return false
    }
    return true;


}
