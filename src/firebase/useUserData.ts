import {
  getFirestore,
  doc,
  setDoc,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";
import { useCallback } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { IUserData } from "../interfaces/IUserData";

import { firebaseApp } from "./firebase";
import { useFirebaseAuth } from "./useFirebaseAuth";

export function useUserData() {
  const { user } = useFirebaseAuth();
  const userDoc = doc(getFirestore(firebaseApp), `userData/${user?.uid}`);
  const [userData] = useDocumentData(userDoc);
  // console.log(userData);
  const setPlantRef = useCallback(
    (plantDoc: DocumentReference<DocumentData>) => {
      setDoc(userDoc, {
        ...userData,
        plantRefs: [...(userData?.plantRefs || {}), plantDoc],
      });
    },
    [userData, userDoc]
  );

  return {
    data: userData as IUserData | undefined,
    setPlantRef,
  };
}
