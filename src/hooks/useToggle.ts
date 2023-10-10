import {useState} from 'react';

export const useToggle = (initValue: boolean = false) => {
  const [value, setValue] = useState<boolean>(initValue);

  const setFalse = () => setValue(false);
  const setTrue = () => setValue(true);
  const toggle = () => setValue(!value);

  return {
    value,
    setValue,
    setFalse,
    setTrue,
    toggle
  }
}
