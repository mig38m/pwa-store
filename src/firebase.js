import config from './firebase-config';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const app = firebase.initializeApp(config);
export const lib = firebase;