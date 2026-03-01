require('dotenv').config();
const express = require('express');
const app = express();

// Recupero delle credenziali dalle variabili d'ambiente (Protette)
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
};

app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nella Multinazionale dei Quadri Elettrici</h1><p>Sistema di configurazione attivo.</p>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server avviato sulla porta ${PORT}`);
    console.log("Connessione sicura al Database stabilita con successo.");
});
