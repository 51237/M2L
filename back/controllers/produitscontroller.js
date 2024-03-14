const { db } = require('../Database/database');
const crypto = require('crypto');

exports.ajoutproduit = async (req, res) => {
    const { name, details, price } = req.body;
    const pid = crypto.randomUUID();
    const image = req.file ? req.file.path : null;

    try {
        const [result] = await db.execute(
            'INSERT INTO products (pid, name, details, price, image) VALUES (?, ?, ?, ?, ?)',
            [pid, name, details, price, image]
        );

        res.status(200).json({ message: 'Objet ajouté avec succès' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur s\'est produite' });
    }
};

exports.afficheproduit = async (req, res) => {
    try {
        const [result] = await db.query('SELECT * FROM products');
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Une erreur s\'est produite' });
    }
};
exports.updateProductQuantity = async (req, res) => {
    const { pid } = req.params;
    const { quantity } = req.body;

    try {
        // Mettez à jour la quantité en stock du produit avec l'ID pid
        await db.execute('UPDATE products SET quantity = ? WHERE pid = ?', [quantity, pid]);

        res.status(200).json({ message: 'Quantité en stock mise à jour avec succès' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur s\'est produite lors de la mise à jour de la quantité en stock' });
    }
};

exports.supprimerproduit = async (req, res) => {
    const pid = req.params.pid; // Récupérer l'ID du produit à supprimer depuis les paramètres de l'URL

    try {
        const [result] = await db.execute(
            'DELETE FROM products WHERE pid = ?',
            [pid]
        );

        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Objet supprimé avec succès' });
        } else {
            res.status(404).json({ error: 'Produit non trouvé' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur s\'est produite lors de la suppression du produit' });
    }
};

exports.nombreProduits = async (req, res) => {
    try {
        const [result] = await db.query('SELECT COUNT(*) AS totalProduits FROM products');
        res.status(200).json({ totalProduits: result[0].totalProduits });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur s\'est produite lors du comptage des produits' });
    }
};