import { useState, useCallback, useEffect } from "react";

export const useSearch = (initialValue: string = "", delay: number = 300) => {
  const [searchValue, setSearchValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue, delay]);

  const setSearch = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const resetSearch = useCallback(() => {
    setSearchValue("");
    setDebouncedValue("");
  }, []);

  return {
    searchValue,
    debouncedValue,
    setSearch,
    resetSearch,
  };
};
