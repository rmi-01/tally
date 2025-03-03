import { CounterContext } from "@/CounterContext";
import { useContext } from "react";

export const useCounter = () => {
  const counter = useContext(CounterContext);
  return counter;
};
