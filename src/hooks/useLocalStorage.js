import { useState, useEffect, useCallback } from "react";

import storage from "./storage";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);

      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const [state, setState] = useState(() => storage.get(key));

  const set = useCallback(
    (newValue) => {
      storage.set(key, newValue);

      setState(newValue);
    },
    [key]
  );

  const remove = useCallback(() => {
    storage.remove(key);

    setState(undefined);
  }, [key]);

  return [value, setValue, state, set, remove];
};

export default useLocalStorage;
