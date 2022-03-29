import { getFirestore, collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { firebaseApp } from "./firebase";

export const useCommonPlants = () => {
  const [values, loading, error] = useCollectionData(
    collection(getFirestore(firebaseApp), "plants")
  );

  return values || [];
};
