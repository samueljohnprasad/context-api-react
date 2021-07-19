import { ExpenseTrackerContext } from "./context";
import { useContext } from "react";
function App() {

  //we are destructioning the values that we needed
  const { Alltransactions, addTransaction, delTransaction } = useContext(
    ExpenseTrackerContext
  );
  console.log("transaction", Alltransactions);
  return (
    <div className="App">
      <p> {Alltransactions.transaction}</p>
      <button onClick={() => addTransaction(1)}>add </button>
      <button onClick={() => delTransaction(-1)}>del </button>
    </div>
  );
}

export default App;
