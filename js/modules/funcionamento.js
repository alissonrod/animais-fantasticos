export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay(); // 5
  const horarioAgora = dataAgora.getHours(); // ?

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}

// const agora = new Date();
// const futuro = new Date('Dec 24 2021 23:59');

// // console.log(agora.getDate());

// // console.log(futuro);

// function converterEmDias(time) {
//   return time / (7 * 24 * 60 * 60 * 1000);
// }

// const diasAgora = converterEmDias(agora.getTime());
// const diasFuturo = converterEmDias(futuro.getTime());

// console.log(diasFuturo - diasAgora);
// console.log(agora)

//
// rever la

// const agora = new Date();
// let futuro = new Date('2021-12-24T23:59:59Z');  // ISO date
// futuro = new Date('Dec 24 2021 23:59'); // long date
// futuro = new Date('24/12/2021 23:59');  // short date

// getDate() // dia do mes: 17
// getDay() // dia da semana: 5
// getTime() // ms desde 1970 *geralmente em seg
// *getUTCHours() - 3 // Brasília

// function converterEmDias(tempo) {
//   return tempo / (30 * 24 * 60 * 60 * 1000);
// }

// const diasAgora = converterEmDias(agora.getTime());
// const diasFuturo = converterEmDias(futuro.getTime());

// console.log(Math.floor(diasFuturo - diasAgora));
