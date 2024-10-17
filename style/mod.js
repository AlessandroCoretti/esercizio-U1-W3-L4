const numeriEstratti = [];

function creaTabellone() {
  const tabellone = document.getElementById("tabellone");
  let numero = 1;
  for (let i = 0; i < 11 && numero <= 76; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 7 && numero <= 76; j++) {
      const cella = document.createElement("td");
      if (numero <= 76) {
        cella.textContent = numero;
        cella.setAttribute("id", "cella-" + numero); // assegna un ID unico a ciascuna cella
        numero++;
      }
      row.appendChild(cella);
    }
    tabellone.appendChild(row);
  }
}

function estraiNumero() {
  if (numeriEstratti.length === 76) {
    alert("Tutti i numeri sono stati estratti!");
    return;
  }

  let numero;
  do {
    numero = Math.floor(Math.random() * 76) + 1; // Estrae un numero da 1 a 76
  } while (numeriEstratti.includes(numero));

  numeriEstratti.push(numero); // memorizza il numero estratto
  document.getElementById("numero-estratto").textContent = "Numero estratto: " + numero;

  // evidenzia la cella estratta
  const cella = document.getElementById("cella-" + numero);
  if (cella) {
    cella.classList.add("estratto");
  }
}

// Inizializza il tabellone e aggiungi il listener al bottone
document.getElementById("estrai-btn").addEventListener("click", estraiNumero);
creaTabellone();
