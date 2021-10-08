import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResp = await fetch(url);
      const animaisJSON = await animaisResp.json();
      const numeroGrid = document.querySelector('.numeros-grid');
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numeroGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais('./animaisapi.json');
}