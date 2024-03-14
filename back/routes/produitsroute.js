const express = require('express');
const multer = require('multer');
const app = express();
const produitscontroller = require('../controllers/produitscontroller');
const usercontroller = require('../controllers/userscontroller');

const path = require('path');
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });
app.put('/produit/:pid', produitscontroller.updateProductQuantity);

app.post('/produit', upload.single('image'), produitscontroller.ajoutproduit);
app.get('/produit', produitscontroller.afficheproduit);
app.delete('/produit/:pid', produitscontroller.supprimerproduit);
app.get('/nombreProduits', produitscontroller.nombreProduits);




module.exports = app;