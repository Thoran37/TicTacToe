import { useState } from "react";
import { PointsContext } from "./PointsContext";

function Store({ children }) {
  let [pt, setPt] = useState([0, 0])

  return (
    <PointsContext.Provider value={[pt, setPt]}>
      {children}
    </PointsContext.Provider>
  );
}
export default Store