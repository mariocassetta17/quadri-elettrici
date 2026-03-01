let carrello = [];
let totale = 0;

function aggiungiAlQuadro(nome, prezzo) {
    // 1. Aggiungi logica carrello
    carrello.push({nome, prezzo});
    totale += prezzo;
    aggiornaInterfaccia();

    // 2. Crea l'elemento visivo nel quadro
    const quadro = document.getElementById('quadro-reale');
    const nuovoPezzo = document.createElement('div');
    
    nuovoPezzo.style.width = "80%";
    nuovoPezzo.style.height = "40px";
    nuovoPezzo.style.background = "#fbbf24";
    nuovoPezzo.style.margin = "10px auto";
    nuovoPezzo.style.borderRadius = "4px";
    nuovoPezzo.style.color = "black";
    nuovoPezzo.style.fontWeight = "bold";
    nuovoPezzo.style.display = "flex";
    nuovoPezzo.style.justifyContent = "center";
    nuovoPezzo.style.alignItems = "center";
    nuovoPezzo.style.fontSize = "12px";
    nuovoPezzo.innerText = nome.toUpperCase();

    quadro.appendChild(nuovoPezzo);
}

function aggiornaInterfaccia() {
    const lista = document.getElementById('lista-pezzi');
    const totaleDoc = document.getElementById('prezzo-totale');
    
    lista.innerHTML = carrello.map(item => 
        `<div style="display:flex; justify-content:space-between; margin-bottom:5px;">
            <span>${item.nome}</span>
            <span>€${item.prezzo.toFixed(2)}</span>
        </div>`
    ).join('');
    
    totaleDoc.innerText = `€ ${totale.toFixed(2)}`;
}
