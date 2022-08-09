import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import treinador from "../../assets/treinador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input";
import Detalhe from "./detalhe";
import { useFormContext } from "../../context/contextoFormulario";

// Neste componente temos nosso formulário e dentro dele
// temos os componentes que precisam consumir nosso estado.
// Lembre-se qual é o passo que devemos dar para que nosso
// componentes podem consumir um estado global.

const Formulario = () => {
  const { state, dispatch } = useFormContext();

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
                value={state.coach.name}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_COACH",
                    payload: { value, field: "name" },
                  })
                }
              />
              <Input
                name="sobrenome"
                label="Sobrenome"
                value={state.coach.lastName}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_COACH",
                    payload: { value, field: "lastName" },
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
                value={state.pokemon.name}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_POKEMON",
                    payload: { value, field: "name" }
                  })
                }
              />
              <Input
                name="type"
                label="Tipo"
                value={state.pokemon.type}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_POKEMON",
                    payload: { value, field: "type" }
                  })
                }
              />
              <Input
                name="element"
                label="Elemento"
                value={state.pokemon.element}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_POKEMON",
                    payload: { value, field: "element" }
                  })
                }
              />
              <Input
                name="height"
                label="Altura"
                value={state.pokemon.height}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_POKEMON",
                    payload: { value, field: "height" }
                  })
                }
              />
              <Input
                name="age"
                label="Idade"
                value={state.pokemon.idade}
                onChange={(value) =>
                  dispatch({
                    type: "UPDATE_POKEMON",
                    payload: { value, field: "age" }
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

export default Formulario;
