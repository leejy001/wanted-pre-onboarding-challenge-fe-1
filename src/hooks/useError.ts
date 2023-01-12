import { useState } from "react";

const useError = <T extends object>(
  initialState: T
): [T, <K extends keyof T>(key: K, value: boolean) => boolean] => {
  const [isError, setIsError] = useState(initialState);

  const setError = <K extends keyof T>(key: K, value: boolean) => {
    setIsError((pre) => ({ ...pre, [key]: value }));
    return value;
  };

  return [isError, setError];
};

export default useError;
