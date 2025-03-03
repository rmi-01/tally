import { createContext, useState } from "react";

interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const CounterContext = createContext<CounterContextType>({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {},
});

export const CounterProvider = ({
  children,
  defaultCount,
}: {
  children: React.ReactNode;
  defaultCount: number;
}) => {
  const [count, setCount] = useState(defaultCount || 0);

  const increment = () => {
    console.log("HELLO");
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    console.log("HELLO WORLD");
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};
