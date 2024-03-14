const mysql = require("mysql2/promise");
require('dotenv').config();
console.log('dbconnexion')
const db = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
});

console.log('connexion reussi')
module.exports = { db: db };