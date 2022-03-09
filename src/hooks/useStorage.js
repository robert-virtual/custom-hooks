import { useState } from "react";

export default function useStorage(initVal, name = "") {
  const [value, setVal] = useState(() => {
    let stored = localStorage.getItem(name);
    return stored || initVal;
  });
  return {
    [name]: value,
    ["set" + name]: ({ target }) => {
      localStorage.setItem(name, target.value);
      setVal(target.value);
    },
  };
}
