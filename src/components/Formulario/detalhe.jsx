import React, { useContext, useEffect } from "react";
import { ContextoFormulario } from "../../context/contextoFormulario";
import PropTypes from 'prop-types'; // ES6
import { useMutation } from 'react-query'

const enviarFormulario = async (data) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Erros ao enviar o formulario');
  }
}


const Detalhe = () => {
  // Aqui devemos pegar os dados do formulário para podermos mostrá-lo em a visualização.
  const { state } = useContext(ContextoFormulario);

  const { data, isLoading, isError, mutate, isSuccess } = useMutation(enviarFormulario);

  const { nome, apelido, email } = state?.coach;

  const {
    nomePokemon,
    tipoPokemon,
    elementoPokemon,
    alturaPokemon,
    idadePokemon,
  } = state?.pokemon;

  useEffect(() => {
    if (isSuccess) {
      alert(`Formulário enviado com sucesso, id ${data ? data?.id : ''}`);
    } else if (isError) {
      alert('Erro ao enviar o formulário. Por favor tenten novamente');
    }
  }, [isSuccess, data, isError]);

  return (
    <div className="detalhe-formulario">
      <div className="cabecalho">
        <h3>Vista prévia da solicitação</h3>
      </div>
      <section className="dados-cliente">
        <h4>Dados do Treinador</h4>
        <div className="lista">
          <p>Nome: {nome}</p>
          <p>Apelido: {apelido}</p>
          <p>Email: {email}</p>
        </div>
      </section>
      <section className="dados-cliente">
        <h4>Dados do Pokémon</h4>
        <div className="lista">
          <p>Nome: {nomePokemon}</p>
          <p>Tipo: {tipoPokemon}</p>
          <p>Elemento: {elementoPokemon}</p>
          <p>Altura: {alturaPokemon}</p>
          <p>Idade: {idadePokemon}</p>
        </div>
      </section>
      <button
        className="botao-enviar"
        onClick={() => mutate(state)}>
        {isLoading ? 'Enviando formulario...' : 'Enviar Solicitação'}
      </button>
    </div>
  );
};


Detalhe.propTypes = {
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

export default Detalhe;
