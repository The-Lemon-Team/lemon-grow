import React from "react";

import { useUserPlants } from "../../../firebase/useUserPlants";
import { useCommonPlants } from "../../../firebase/useCommonPlants";

export const MainPage: React.FC = () => {
  const plants = useUserPlants();
  useCommonPlants();

  return <div>MainPage</div>;
};
