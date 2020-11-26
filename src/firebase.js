import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    REACT_APP_FIREBASE_KEY: "AIzaSyA48rnmr3s_gdcv2-ng49l02g7VDoywNT4",
    REACT_APP_FIREBASE_DOMAIN: "doggobotto-bf955.firebaseapp.com",
    REACT_APP_FIREBASE_DATABASE: "https://doggobotto-bf955.firebaseio.com",
    REACT_APP_FIREBASE_PROJECT_ID: "doggobotto-bf955",
    REACT_APP_FIREBASE_STORAGE_BUCKET: "doggobotto-bf955.appspot.com",
    REACT_APP_FIREBASE_SENDER_ID: "1056534201474",
    REACT_APP_FIREBASE_APP_ID: "1:1056534201474:web:dbe5b8c653286b2b22209b",
    REACT_APP_FIREBASE_MEASUREMENT_ID: "G-YXKQCTMR6T"
});

export default app;