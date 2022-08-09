import { createContext, useReducer, useContext } from "react";

const FormContext = createContext();

export function useFormContext() {
  const formData = useContext(FormContext);

  if (!formData) {
    throw new Error(
      "Para consumir o estado do provider FormContextProvider é necessário ser um componente filho dele."
    );
  }

  return formData;
}
//
/*
*@author: João Eloi, Katherine Duarte, Thiago Maurat, Paulo Rossi, Karina Osuka
 */

//Define the initial state of the reducer
const initialState = {
  coach: {
    name: "",
    lastName: "",
    email: "",
  },
  pokemon: {
    name: "",
    type: "",
    element: "",
    height: 0,
    age: "",
  },
};

/**
 * Function reducer, update the state 

 * @param {object} state: contain initial and final state of data

 * @param {object} action: return the action object
 * @returns 
 */

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_COACH":
      return {
        ...state,
        coach: {
          ...state.coach,
          [action.payload.field]: action.payload.value,
        },
      }
    case "UPDATE_POKEMON":
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          [action.payload.field]: action.payload.value,
        },
      }

    default:
      return state;
  }
}


//
export function FormContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}
