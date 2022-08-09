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

/** 
 * @author: João Eloi, Katherine Duarte, Thiago Maurat, Paulo Rossi, Karina Osuka
 *
 *
 * Define the initial state of the reducer;
 * @param {string} state.coach.name: first name of the coach
 * @param {string} state.coach.lastName: lastname of the coach
 * @param {string} state.coach.email: email of the coach
 *
 * @param {string} state.pokemon.name: name of the pokemon
 * @param {string} state.pokemon.type: type of the pokemon
 * @param {string} state.pokemon.element: element of the pokemon
 * @param {number} state.pokemon.height: height of the pokemon
 * @param {string} state.pokemon.age: age of the pokemon
 */

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
 * Function reducer, update the state by action 

 * @param {object} state: contain state of data
 * @param {object} state.coach: contain state of coach data
 * @param {object} action: return the action object
 * @param {string} action.payload.field: return the updated data field
 * @param {string} action.payload.value: return the value

 * @param {object} state.pokemon: contain state of pokemon data
 * @param {object} action: return the action object
 * 
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
