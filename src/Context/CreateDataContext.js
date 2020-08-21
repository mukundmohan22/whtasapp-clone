import React, { createContext, useReducer } from "react"

export default (reducer, actions, initialState) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, disptach] = useReducer(reducer, initialState);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](disptach);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>)
  }
  return { Context, Provider };
};