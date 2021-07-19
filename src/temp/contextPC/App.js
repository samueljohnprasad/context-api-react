import React, { createContext } from "react";
import Movielist from "./Movielist";

export const storeContext = createContext();

const arr=['samuel','john','prasad']

const provider = ({ children }) => {
  return <storeContext>{children}</storeContext>;
};

function App() {
  return (
    <storeContext.Provider value ={{arr}}>
      <Movielist />
    </storeContext.Provider>
  );
}

export default App;
