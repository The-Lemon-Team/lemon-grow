import { useCallback, useMemo, useState } from "react";
import { addDoc, collection, getDoc, getFirestore } from "firebase/firestore";

import { useUserData } from "./useUserData";
import { firebaseApp } from "./firebase";

import { IPlant } from "../interfaces/IPlant";

export function useUserPlants() {
  const [plants, setPlants] = useState([] as IPlant[]);
  const { data, setPlantRef } = useUserData();
  useMemo(() => {
    Promise.all(
      data?.plantRefs.map((plantRef) =>
        getDoc(plantRef).then(
          (doc) =>
            ({
              ...doc.data(),
              id: plantRef.id,
            } as IPlant)
        )
      ) || []
    ).then((plants) => setPlants(plants));

    return () => setPlants([]);
  }, [data?.plantRefs]);
  const createPlant = useCallback(
    async (payload: Partial<IPlant>) => {
      const newPlantDoc = await addDoc(
        collection(getFirestore(firebaseApp), "plants"),
        payload
      );

      setPlantRef(newPlantDoc);
    },
    [setPlantRef]
  );

  return { createPlant, plants };
}
