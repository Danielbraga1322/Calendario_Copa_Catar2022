function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./classificados_icon/icon=${player1}.svg" alt="${player1}" />
    <strong>${hour}</strong>
    <img src="./classificados_icon/icon=${player2}.svg" alt="${player2}" />
  </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay: ${delay}s" >
        <h2>${date}<span>${day}</span></h2>
        <ul>
          ${games}  
        </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "16:00", "equador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("inglaterra", "13:00", "iran") +
      createGame("senegal", "16:00", "holanda") +
      createGame("estados unidos", "19:00", "gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "10:00", "arabia saudita") +
      createGame("dinamarca", "13:00", "tunisia") +
      createGame("mexico", "16:00", "polonia") +
      createGame("franca", "19:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("marrocos", "10:00", "croacia") +
      createGame("alemanha", "13:00", "japao") +
      createGame("espanha", "16:00", "costa rica") +
      createGame("belgica", "19:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("suica", "10:00", "camaroes") +
      createGame("uruguai", "13:00", "korea do sul") +
      createGame("portugal", "16:00", "ghana") +
      createGame("brasil", "19:00", "servia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("gales", "10:00", "iran") +
      createGame("qatar", "13:00", "senegal") +
      createGame("holanda", "16:00", "equador") +
      createGame("inglaterra", "19:00", "estados unidos")
  ) +
  createCard(
    "26/11",
    "sabado",
    createGame("tunisia", "10:00", "australia") +
      createGame("polonia", "13:00", "arabia saudita") +
      createGame("franca", "16:00", "dinamarca") +
      createGame("argentina", "19:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japao", "10:00", "costa rica") +
      createGame("belgica", "13:00", "marrocos") +
      createGame("croacia", "16:00", "canada") +
      createGame("espanha", "19:00", "alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("camaroes", "10:00", "servia") +
      createGame("korea do sul", "13:00", "ghana") +
      createGame("brasil", "16:00", "suica") +
      createGame("portugal", "19:00", "uruguai")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("equador", "15:00", "senegal") +
      createGame("holanda", "15:00", "qatar") +
      createGame("iran", "19:00", "estados unidos") +
      createGame("gales", "19:00", "inglaterra")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "15:00", "franca") +
      createGame("australia", "15:00", "dinamarca") +
      createGame("polonia", "19:00", "argentina") +
      createGame("arabia saudita", "19:00", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croacia", "15:00", "belgica") +
      createGame("canada", "15:00", "marrocos") +
      createGame("japao", "19:00", "espanha") +
      createGame("costa rica", "19:00", "alemanha")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("korea do sul", "15:00", "portugal") +
      createGame("ghana", "15:00", "uruguai") +
      createGame("servia", "19:00", "suica") +
      createGame("camaroes", "19:00", "brasil")
  )
