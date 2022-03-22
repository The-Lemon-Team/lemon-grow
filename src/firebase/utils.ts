import { collection, getFirestore } from "firebase/firestore";

import { firebaseApp } from "./firebase";

export const getFirestoreCollection = (collectionName: string) =>
  collection(getFirestore(firebaseApp), collectionName);
