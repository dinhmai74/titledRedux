import React from "react";
import { Counter } from "../components";

type HomeScreenProps = {};

export const HomeScreen = (props: HomeScreenProps) => {
  return (
    <div>
      <Counter />
    </div>
  );
};
