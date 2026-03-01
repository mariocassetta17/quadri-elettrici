let somma = 0;

function creaPezzo(tipo, prezzo) {
    // Aggiungi al calcolo
    somma += prezzo;
    document.getElementById('totale').innerText = `€ ${somma.toFixed(2)}`;
    
    // Aggiungi riga al carrello
    const riga = document.createElement('div');
    riga.innerHTML = `<span>${tipo.toUpperCase()}</span> - €${prezzo}`;
    document.getElementById('elenco-ordini').appendChild(riga);

    // Crea l'elemento grafico sulla prima guida DIN libera
    const pezzo = document.createElement('div');
    pezzo.className = `interruttore ${tipo}`;
    
    // Lo mettiamo nella prima guida disponibile
    document.getElementById('din-1').appendChild(pezzo);
}
