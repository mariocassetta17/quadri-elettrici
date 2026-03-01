// Database di stato del progetto
let statoProgetto = {
    totalePrezzo: 0,
    moduliOccupati: 0,
    moduliMassimi: 36, // 12 moduli per 3 guide
    caloreDissipato: 0,
    caloreMassimo: 100 // Watt massimi prima della ventilazione forzata
};

function aggiungiComponente(nome, prezzo, moduli, calore) {
    // 1. Controllo Spazio
    if (statoProgetto.moduliOccupati + moduli > statoProgetto.moduliMassimi) {
        alert("ERRORE: Spazio nel quadro esaurito! Passa a una carpenteria più grande.");
        return;
    }

    // 2. Aggiornamento Dati
    statoProgetto.totalePrezzo += prezzo;
    statoProgetto.moduliOccupati += moduli;
    statoProgetto.caloreDissipato += calore;

    // 3. Render Visivo nel Quadro Fisico
    renderizzaNelQuadro(moduli);

    // 4. Aggiorna Dashboard Statistiche
    aggiornaDashboard(nome, prezzo);
}

function renderizzaNelQuadro(moduli) {
    // La larghezza base di un modulo è circa 30px nell'interfaccia
    const larghezzaBase = 30; 
    
    const pezzo = document.createElement('div');
    pezzo.className = 'modulo-din';
    pezzo.style.width = (larghezzaBase * moduli) + 'px';

    // Logica base: riempi la prima guida, poi la seconda, ecc.
    let guidaDestinazione = document.getElementById('guida-1');
    if (guidaDestinazione.children.length > 10) guidaDestinazione = document.getElementById('guida-2');
    if (guidaDestinazione.children.length > 10) guidaDestinazione = document.getElementById('guida-3');

    guidaDestinazione.appendChild(pezzo);
}

function aggiornaDashboard(nome, prezzo) {
    // Aggiorna Prezzo
    document.getElementById('totale-prezzo').innerText = `€ ${statoProgetto.totalePrezzo.toFixed(2)}`;
    
    // Aggiorna Distinta Base
    const lista = document.getElementById('distinta-base');
    const item = document.createElement('div');
    item.className = "flex justify-between py-2 border-b border-gray-800 text-gray-300";
    item.innerHTML = `<span>${nome}</span><span class="text-blue-400">€${prezzo.toFixed(2)}</span>`;
    lista.appendChild(item);

    // Aggiorna Barre di Progresso
    const percSpazio = (statoProgetto.moduliOccupati / statoProgetto.moduliMassimi) * 100;
    document.getElementById('spazio-testo').innerText = `${statoProgetto.moduliOccupati} / ${statoProgetto.moduliMassimi} Moduli`;
    document.getElementById('barra-spazio').style.width = `${percSpazio}%`;

    const percCalore = (statoProgetto.caloreDissipato / statoProgetto.caloreMassimo) * 100;
    document.getElementById('termica-testo').innerText = `${statoProgetto.caloreDissipato.toFixed(1)} W`;
    const barraTermica = document.getElementById('barra-termica');
    barraTermica.style.width = `${percCalore}%`;
    
    // Cambia colore termica se scalda troppo
    if (percCalore > 75) barraTermica.className = "bg-red-500 h-2 rounded-full transition-all duration-500";
}
