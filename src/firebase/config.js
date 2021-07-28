import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0JLMTe1Q32JKIhws0HQUKffWzdWqTvCk",
    authDomain: "instagram-clone-periyasamy.firebaseapp.com",
    projectId: "instagram-clone-periyasamy",
    storageBucket: "instagram-clone-periyasamy.appspot.com",
    messagingSenderId: "586703516139",
    appId: "1:586703516139:web:51ed5912d904948f87e9ae"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

const projectFirestore = firebase.firestore();

const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
export {projectStorage, projectFirestore,timeStamp};