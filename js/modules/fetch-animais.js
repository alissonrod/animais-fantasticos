import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // Cria a div contendo informacoes
  // com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // preenche cada animal no DOM
  const numeroGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numeroGrid.appendChild(divAnimal);
  }

  // Anima os numeros de cada animal
  function animaiAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo json
  // e cria cada animal utilizando createAnimais
  async function criarAnimais() {
    try {
      // Fetch, espera a resposta e transforma em json
      const animaisResp = await fetch(url);
      const animaisJSON = await animaisResp.json();

      // após a transformacao de json, ativa as funcoes
      // para preencher e animar os números
      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaiAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
