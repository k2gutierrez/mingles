import SimpleCrypto from "simple-crypto-js";

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const cipherKey = "ff#$ldie#GkeW#$rv%guydsl"
const ethraw = "0xe" /* eth private key */
const hhraw = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" /* hardhat private key */

export const simpleCrypto = new SimpleCrypto(cipherKey)
export const cipherEth = simpleCrypto.encrypt(ethraw)
export const cipherHH = simpleCrypto.encrypt(hhraw)

export var hhresell = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
export var hhnftcol = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
var hhrpc = "http://127.0.0.1:8545"

export var mainnet = hhrpc

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
//const analytics = getAnalytics(firebase_app);

export default firebase_app;
export const db = getFirestore(firebase_app);
export const storage = getStorage(firebase_app);