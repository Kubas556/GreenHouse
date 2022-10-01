import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getMessaging } from 'firebase/messaging';

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

if (firebase.getApps().length === 0) {
  firebase.initializeApp(config);
}

console.log('FIREBASE COUNT: ' + firebase.getApps().length);

const authInstance = getAuth();
const database = getDatabase();
const messaging = process.env.NEXT_PUBLIC_HTTP !== 'true' ? getMessaging(firebase.getApps()[0]) : undefined;

export { authInstance, firebase, database, messaging };
