import { useCallback, useMemo } from "react";
import { collection, getFirestore, doc, addDoc } from "firebase/firestore";

import { IDay } from "../interfaces/IDay";
import { useCollection } from "react-firebase-hooks/firestore";

import { firebaseApp } from "./firebase";
import { useUserData } from "./useUserData";

export function useDays(plantId: string) {
  const { setPlantRef } = useUserData();
  const daysRef = collection(
    getFirestore(firebaseApp),
    `plants/${plantId}/days`
  );
  const [values] = useCollection(daysRef);
  const days = values?.docs.map((day) => ({ id: day.id, ...day.data() }));

  const createDay = useCallback(
    async (payload: Partial<IDay>) => {
      const newDayDoc = await addDoc(daysRef, payload);

      setPlantRef(newDayDoc);
    },
    [setPlantRef, daysRef]
  );

  return {
    days,
    createDay,
  };
}
