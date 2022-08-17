import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import treinador from "../../assets/treinador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input";
import Detalhe from "./detalhe";
import { useFormContext } from "../../context/contextoFormulario";
import PropTypes from 'prop-types'; // ES6
import { useQuery } from 'react-query';
import SelectType from "../SelectType";

// Neste componente temos nosso formulário e dentro dele
// temos os componentes que precisam consumir nosso estado.
// Lembre-se qual é o passo que devemos dar para que nosso
// componentes podem consumir um estado global.


// const { isLoading, error, data } = useQuery('getType', () =>
//   fetch('https://pokeapi.co/api/v2/type/').then((res) => res.json))

const getpokemonTypes = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/type');
  const data = await response.json();
  return data.results;
};


const Formulario = () => {
  const { state, dispatch } = useFormContext();

  const {
    data: tipos,
    isLoading,
    isError,
  } = useQuery('pokemonTypes', getpokemonTypes);

  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokémon de Ash</h2>
        </div>
        <Link className="retorna" to="/">
          Inicio
        </Link>
      </header>
      <div className="formulario-entrada">
        <h3>Solicitação de atenção</h3>
        <p>
          Por favor, preencha o formulário para que possamos mostrar seu Pokémon
        </p>
        <div className="corpo-formulario">
          {/*
           Se ao menos tivéssemos uma maneira de "encapsular" nossos componentes
           para que possam acessar o estado global.
          */}
          <div className="inputs">
            <div>
              <p className="nome-secao">
                <img src={treinador} alt="treinador" />
                <span>Treinador</span>
              </p>
              <Input
                name="nome"
                label="Nome"
                value={state.coach.nome}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_COACH",
                    payload: { value, field: "nome" },
                  })
                }
              />
              <Input
                name="apelido"
                label="Apelido"
                value={state.coach.apelido}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_COACH",
                    payload: { value, field: "apelido" },
                  })
                }
              />
              <Input
                name="email"
                label="Email"
                type="email"
                value={state.coach.email}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_COACH",
                    payload: { value, field: "email" },
                  })
                }
              />

            </div>
            <div>
              <p className="nome-secao">
                <img src={pikachu} alt="pikachu" />
                <span>Pokémon</span>
              </p>
              <Input
                name="nomePokemon"
                label="Nome"
                value={state.pokemon.nomePokemon}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_POKEMON",
                    payload: { value, field: "nomePokemon" }
                  })
                }
              />

              <SelectType
                name='tipoPokemon'
                label='Tipo'
                disabled={isLoading || isError}
                options={tipos}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_POKEMON",
                    payload: { value, field: "tipoPokemon" }
                  })
                }

              />

              <Input
                name="elementoPokemon"
                label="Elemento"
                value={state.pokemon.element}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_POKEMON",
                    payload: { value, field: "elementoPokemon" }
                  })
                }
              />
              <Input
                name="alturaPokemon"
                label="Altura"
                value={state.pokemon.height}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_POKEMON",
                    payload: { value, field: "alturaPokemon" }
                  })
                }
              />
              <Input
                name="idadePokemon"
                label="Idade"
                value={state.pokemon.idade}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_POKEMON",
                    payload: { value, field: "idadePokemon" }
                  })
                }
              />
            </div>
          </div>
          <Detalhe />
        </div>
      </div>
    </>
  );
};

Formulario.protoType = {
  coach: PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }),
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    element: PropTypes.string,
    height: PropTypes.number,
    age: PropTypes.string,
  })
}


export default Formulario;
