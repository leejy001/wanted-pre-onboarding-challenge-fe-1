import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState
} from "react";

const useForm = <T extends object>(
  initialState: T
): [
  T,
  (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  Dispatch<SetStateAction<T>>
] => {
  const [state, setState] = useState<T>(initialState);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setState((pre) => ({ ...pre, [event.target.name]: event.target.value })),
    []
  );

  return [state, handleChange, setState];
};

export default useForm;
