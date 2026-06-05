import { useContext } from "react";
import { dicti } from "./use_Context_test_1";
import { Color } from "./use_Context_test_2";

export default function UC3() {
  var d = useContext(dicti);
  var c1 = useContext(Color);
  return (
    <>
      <h1 style={{ color: c1 }}>Welcome {(d.n1 * d.n2) / d.n3}</h1>
    </>
  );
}

// Output ------------

// Welcome 10
