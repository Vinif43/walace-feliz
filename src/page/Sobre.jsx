import { useEffect, useState } from 'react';

export default function Sobre() {
  const [dados, setDados] = useState([]); //criando um estado para armazenar os dados da api

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setDados(data.results))
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <h1>Galeria</h1>
      {dados.map((personagem) => (
        <div key={personagem.id}>
          <h1>{personagem.name}</h1>
          <img src={personagem.image} />
        </div>
      ))}
    </div>
  );
}
