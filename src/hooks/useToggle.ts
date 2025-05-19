import { useState, useCallback } from "react";

export const useToggle = (initialState: boolean = false) => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((prevState) => !prevState), []);
  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);

  return [state, { toggle, setTrue, setFalse, setState }] as const;
};
