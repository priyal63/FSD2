import { createContext } from "react";
import Com2 from "./use_Context_test_2";

const obj = { n1: 5, n2: 4, n3: 2 };
const dicti = createContext();

export default function Com1() {
  return (
    <>
      <dicti.Provider value={obj}>
        <Com2 />
      </dicti.Provider>
    </>
  );
}
export { dicti };
