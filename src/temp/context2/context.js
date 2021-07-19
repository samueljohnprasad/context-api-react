import { createContext, useReducer } from "react";
import { contextReducer } from "./contextReducer";

//this is the inital state 
const initState = {
    transaction :0
};
//import this context where you need it(ex: child components) and retriev data using hook,ex: useContext(ExpenseTrackerContext)
export const ExpenseTrackerContext = createContext(initState);

//wrap this provider in index js
export  const ContextProvider = ({ children }) => {
  //its a useReducer hook , it has 3 paramerter, 1. first parameter is rootReduer, 2. initialState 3. third parameter is optional
  //useReducer return an array that contains state and dispatch
  const [Alltransactions, dispatch] = useReducer(contextReducer, initState);


  //these are actions
  const addTransaction =(transaction)=> dispatch({type:'ADD_TRAN',payload:transaction})
  const delTransaction =(transaction) => dispatch({type:'DEL_TRAN',payload:transaction})
  return (
    <ExpenseTrackerContext.Provider
      value={{
        Alltransactions,
        addTransaction,
        delTransaction,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
