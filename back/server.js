// Importation des modules nécessaires
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require("mysql2/promise");
const crypto = require('crypto');
const bcrypt = require('bcrypt')
const multer = require('multer');
const path = require('path');
const produitsroute = require('./routes/produitsroute');
const usersroute = require('./routes/usersroute');
const cookieParser = require('cookie-parser');

// Assurez-vous que crypto.webcrypto est disponible pour webcrypto pour le fonctionnement de crypto-browserify
require('crypto').webcrypto = require('crypto-browserify');

// Utilisation de cookie-parser pour gérer les cookies
app.use(cookieParser());

// Utilisation de JSON middleware pour traiter les requêtes au format JSON
app.use(express.json());

// Activation du support CORS pour permettre les requêtes depuis un domaine différent
app.use(cors({
    origin: 'http://localhost:3001', // Remplacez cela par l'origine correcte de votre application React
    credentials: true,
}));

// Middleware pour servir les fichiers statiques
app.use('/uploads', express.static('uploads'));

// Routes pour les produits et les utilisateurs
app.use('/api/produitsroute', produitsroute);
app.use('/api/usersroute', usersroute);

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
    console.log("Serveur à l'écoute");
});
