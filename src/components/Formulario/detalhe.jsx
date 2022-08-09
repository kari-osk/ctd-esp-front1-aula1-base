import React from "react";
import { useFormContext } from "../../context/contextoFormulario";

const Detalhe = () => {
  // Aqui devemos pegar os dados do formulário para podermos mostrá-lo em a visualização.
  const { state } = useFormContext();

  return (
    <div className="detalhe-formulario">
      <div className="cabecalho">
        <h3>Vista prévia da solicitação</h3>
      </div>
      <section className="dados-cliente">
        <h4>Dados do Treinador</h4>
        <div className="lista">
          <p>Nome: {state.coach.name}</p>
          <p>Sobrenome: {state.coach.lastName}</p>
          <p>Email: {state.coach.email}</p>
        </div>
      </section>
      <section className="dados-cliente">
        <h4>Dados do Pokémon</h4>
        <div className="lista">
          <p>Nome: {state.pokemon.name}</p>
          <p>Tipo: {state.pokemon.type}</p>
          <p>Elemento: {state.pokemon.element}</p>
          <p>Altura: {state.pokemon.height}</p>
          <p>Idade: {state.pokemon.age}</p>
        </div>
      </section>
      <button
        className="botao-enviar"
        onClick={() => alert("Solicitação enviada :)")}
      >
        Enviar Solicitação
      </button>
    </div>
  );
};

export default Detalhe;
