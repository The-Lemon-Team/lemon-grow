import React from "react";

import { useUserPlants } from "../../../firebase/useUserPlants";
import { useCommonPlants } from "../../../firebase/useCommonPlants";
import { useDays } from "../../../firebase/useDays";

export const MainPage: React.FC = () => {
  const plants = useUserPlants();
  const days = useDays("KoMVeRP3QZU8r1IQCqCA");
  useCommonPlants();

  return <div>MainPage</div>;
};
