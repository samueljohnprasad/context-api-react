import React from "react";
import { storeContext } from "./App";

function movielist() {
  return (
    <storeContext.Consumer>
    {(value) => {
        console.log('valdfsdfue',value)
        return <div></div>;
      }}
    </storeContext.Consumer>
  );
}

export default movielist;
