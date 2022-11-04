const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el)
let bg = document.querySelector('body')

c('.active').classList.remove('active')

const createGame = (player1, hour1, player2) => {
  return `
  <li>
          <img src="assets/images/icons/icon=${player1}.svg" alt="switzerland">
          <strong>${hour1}</strong>
          <img src="assets/images/icons/icon=${player2}.svg" alt="cameroon">
        </li>
  `
}
let delay = 0;
const createCard = (date, day, games, rodada) => {
 delay = delay + 0;
  return `
<div class="card" style="animation-delay: ${delay}s">
    <h2> ${date} <span>${day}</span></h2>
    <h4> ${rodada}</h4>
      <ul>
        ${games}
    </ul>
</div>
`
}


document.querySelector('#cards').innerHTML =
  
  createCard("24/11", "QUINTA",
    createGame('brazil', '07:00', 'cameroon') +
    createGame('serbia', '16:00', 'switzerland'), "1ª Rodada") +
  createCard("27/11", "QUINTA",
    createGame('cameroon', '07:00', 'serbia') +
    createGame('brazil', '13:00', 'switzerland'), "2ª Rodada") +
  createCard("02/12", "sexta",
    createGame('cameroon', '16:00', 'brazil') +
    createGame('serbia', '16:00', 'switzerland'), "3ª Rodada")

let grupoA = document.querySelector('#GrupoA')

grupoA.addEventListener('click', () => {
  bg.classList.add('yellow')
  bg.classList.remove('body')
  
  document.querySelector('#cards').innerHTML =
    
    createCard("20/11", "domingo",
      createGame('qatar', '13:00', 'ecuador'), "1ª Rodada"
    ) +
    createCard("21/11", "segunda",
      createGame('senegal', '13:00', 'netherlands'), "1ª Rodada"
    ) +
    createCard("25/11", "sexta",
      createGame('qatar', '10:00', 'senegal') +
      createGame('netherlands', '13:00', 'ecuador'), "2ª Rodada"
    ) +
    createCard("29/11", "terça",
      createGame('netherlands', '12:00', 'qatar') +
      createGame('ecuador', '12:00', 'senegal'), "3ª Rodada"
    )

})

let grupoB = document.querySelector('#GrupoB')
grupoB.addEventListener('click', () => {
  bg.classList.remove('yellow')
  bg.classList.remove('green')
  bg.classList.remove('blue')
  document.querySelector('#cards').innerHTML =
    
    createCard("21/11", "sabado",
      createGame('england', '10:00', 'iran') +
      createGame('usa', '16:00', 'wales'), "1ª Rodada"
    ) +
    createCard("25/11", "sexta",
      createGame('wales', '07:00', 'iran') +
      createGame('england', '16:00', 'usa'), "2ª Rodada"
    ) +
    createCard("29/11", "terça",
      createGame('iran', '16:00', 'usa') +
      createGame('wales', '16:00', 'england'), "3ª Rodada"
    )


})
let grupoC = document.querySelector('#GrupoC')
grupoC.addEventListener('click', () => {
  bg.classList.add('green')
  bg.classList.remove('yellow')
  bg.classList.remove('blue')


  document.querySelector('#cards').innerHTML =

    createCard("22/11", "terça",
      createGame('argentina', '07:00', 'saudi arabia') +
      createGame('mexico', '13:00', 'poland'), "1ª Rodada"
    ) +
    createCard("26/11", "sabado",
      createGame('poland', '10:00', 'saudi arabia') +
      createGame('argentina', '16:00', 'mexico'), "2ª Rodada"
    ) +
    createCard("30/11", "quarta",
      createGame('poland', '16:00', 'argentina') +
      createGame('saudi arabia', '16:00', 'mexico'), "3ª Rodada"
    )
})
let grupoD = document.querySelector('#GrupoD')
grupoD.addEventListener('click', () => {
  bg.classList.add('blue')
  bg.classList.remove('yellow')
  bg.classList.remove('green')
  document.querySelector('#cards').innerHTML =

    createCard("22/11", "terça",
      createGame('denmark', '10:00', 'tunisia') +
      createGame('france', '16:00', 'australia'), "1ª Rodada"
    ) +
    createCard("26/11", "sabado",
      createGame('tunisia', '07:00', 'australia') +
      createGame('france', '13:00', 'denmark'), "2ª Rodada"
    ) +
    createCard("30/11", "quarta",
      createGame('tunisia', '16:00', 'france') +
      createGame('australia', '16:00', 'denmark'), "3ª Rodada"
    )

})
let grupoE = document.querySelector('#GrupoE')
grupoE.addEventListener('click', () => {
  bg.classList.add('yellow')
  bg.classList.remove('body')
  document.querySelector('#cards').innerHTML =

    createCard("22/11", "terça",
      createGame('germany', '10:00', 'japan') +
      createGame('spain', '13:00', 'costa rica'), "1ª Rodada"
    ) +
    createCard("27/11", "domingo",
      createGame('japan', '07:00', 'costa rica') +
      createGame('spain', '16:00', 'germany'), "2ª Rodada"
    ) +
    createCard("01/12", "quinta",
      createGame('japan', '16:00', 'spain') +
      createGame('costa rica', '16:00', 'germany'), "3ª Rodada"
    )

})
let grupoF = document.querySelector('#GrupoF')
grupoF.addEventListener('click', () => {
  bg.classList.remove('yellow')
  bg.classList.remove('green')
  bg.classList.remove('blue')
  document.querySelector('#cards').innerHTML =

    createCard("23/11", "quarta",
      createGame('morocco', '07:00', 'croatia') +
      createGame('belgium', '16:00', 'canada'), "1ª Rodada"
    ) +
    createCard("27/11", "domingo",
      createGame('belgium', '10:00', 'morocco') +
      createGame('croatia', '13:00', 'canada'), "2ª Rodada"
    ) +
    createCard("01/12", "quinta",
      createGame('croatia', '16:00', 'belgium') +
      createGame('canada', '16:00', 'morocco'), "3ª Rodada"
    )

})
let grupoG = document.querySelector('#GrupoG')
grupoG.addEventListener('click', () => {
  
  bg.classList.add('green')
  bg.classList.remove('yellow')
  bg.classList.remove('blue')
  document.querySelector('#cards').innerHTML =

    createCard("24/11", "QUINTA",
      createGame('brazil', '07:00', 'cameroon') +
      createGame('serbia', '16:00', 'switzerland'), "1ª Rodada"
    ) +
    createCard("27/11", "domingo",
      createGame('cameroon', '07:00', 'serbia') +
      createGame('brazil', '13:00', 'switzerland'), "2ª Rodada"
    ) +
    createCard("02/12", "sexta",
      createGame('cameroon', '16:00', 'brazil') +
      createGame('serbia', '16:00', 'switzerland'), "3ª Rodada"
    )

})
let grupoH = document.querySelector('#GrupoH')
grupoH.addEventListener('click', () => {
  bg.classList.add('blue')
  bg.classList.remove('yellow')
  bg.classList.remove('green')
  document.querySelector('#cards').innerHTML =

    createCard("24/11", "QUINTA",
      createGame('uruguay', '10:00', 'south korea') +
      createGame('portugal', '13:00', 'ghana'), "1ª Rodada"
    ) +
    createCard("28/11", "segunda",
      createGame('south korea', '10:00', 'ghana') +
      createGame('portugal', '16:00', 'uruguay'), "2ª Rodada"
    ) +
    createCard("02/12", "sexta",
      createGame('south korea', '16:00', 'portugal') +
      createGame('ghana', '16:00', 'uruguay'), "3ª Rodada"
    )


})

