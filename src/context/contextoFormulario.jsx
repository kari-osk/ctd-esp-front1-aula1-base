import { createContext, useReducer, useContext } from "react";
import PropTypes from 'prop-types';

export const ContextoFormulario = createContext();

export function useFormContext() {
  const formData = useContext(ContextoFormulario);

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
 * Estado inicial do formulário.
 * @type {{
 *    treinador:{
 *      nome: string,
 *      apelido: string,
 *      email: string
 *    },
 *    pokemon: {
 *      nomePokemon: string,
 *      tipoPokemon: string,
 *      elementoPokemon: string,
 *      alturaPokemon: string,
 *      idadePokemon: string
 *   }
 * }}}
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

 * @param {object} state: contain state of data
 * @param {object} state.pokemon: contain state of pokemon data
 * @param {object} action: return the action object
 * @param {string} action.payload.field: return the updated data field
 * @param {string} action.payload.value: return the value
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


export function FormContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextoFormulario.Provider value={{ state, dispatch }}>
      {children}
    </ContextoFormulario.Provider>
  );
}

FormContextProvider.propTypes = {
  children: PropTypes.elementType
}


