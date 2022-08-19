import React, { useContext, useState } from 'react'
import { ContextoFormulario } from '../../context/contextoFormulario';

// const especies = async () => {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species`);
//   response.json();
// }


// Devemos substituir este array pelos dados da API
const especies = [
  { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon-species/1/" },
  { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon-species/2/" },
  { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon-species/3/" },
];

const InputEspecie = ({ name, label }) => {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const { handleInputBlur } = useContext(ContextoFormulario);

  const elegirEspecie = (e, nomeEspecie) => {
    e.preventDefault();

    handleInputBlur("ATUALIZAR_POKEMON", {
      campo: "especiePokemon",
      valor: nomeEspecie,
    });
    setMostrarPopup(false);
  };

  const renderizarEspecies = () => (
    <>
      {especies.map((especie) => (
        <button
          key={especie.name}
          className="botoes-especie"
          onClick={(e) => elegirEspecie(e, especie.name)}
        >
          {especie.name}
        </button>
      ))}
    </>
  );

  return (
    <div className="input-receptor">
      <label>Espécie</label>

      {mostrarPopup && (
        <div className="popup-especie">
          <h4>Selecionar espécie</h4><button onClick={() => setMostrarPopup(false)}>X</button>
          <div className="receptor-especies">{renderizarEspecies()}</div>
          <div className="paginacao">
            <button className="botao-anterior">Anterior</button>
            <button className="botao-seguinte">Seguinte</button>
          </div>
        </div>
      )}
      <p htmlFor={name}>{label}</p>
      <button
        className="botao-selecionar-especies"
        onClick={() => setMostrarPopup(true)}
      >
        Selecionar
      </button>
    </div>
  );
};
export default InputEspecie
