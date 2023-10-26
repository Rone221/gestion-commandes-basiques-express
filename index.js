// Importation des modules nécessaires
const express = require('express'); // Express.js pour créer le serveur
const path = require('path'); // Path pour gérer les chemins de fichiers

// Crée une application Express
const app = express();

// Définition du dossier statique "public" pour servir des fichiers statiques (CSS, JS, images, etc.)
app.use(express.static('public'));

// Définition du numéro de port pour le serveur
const port = 3500;

// Gère la route principale ("/") pour renvoyer le fichier "accueil.html"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/accueil.html'));
})

// gestion des erreurs 404
app.use((req, res) => {
    // renvoie le fichier "404.html quand on a le  statut 404 (Page non trouvée)
    res.status(404).sendFile(path.join(__dirname + '/public/404.html'));
})

// Démarre le serveur Express et écoute le port spécifié en haut
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
