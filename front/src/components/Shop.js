import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import '../styles/shop.css';

function Shop() {
    const [products, setProducts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour vérifier si l'utilisateur est connecté
    const [quantity, setQuantity] = useState(1); // État pour stocker la quantité spécifiée par l'utilisateur

    useEffect(() => {
        // Effectuer une requête HTTP GET pour récupérer la liste des produits depuis le serveur
        axios.get('http://localhost:3000/api/produitsroute/produit')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des produits:', error);
            });

        // Vérifier si l'utilisateur est connecté
        const token = Cookies.get('token');
        setIsLoggedIn(!!token); // Si un token existe, l'utilisateur est connecté
    }, []);

    // Fonction pour ajouter le produit au panier avec une quantité spécifiée
    const addToCart = async (product, quantity) => {
        if (!isLoggedIn) {
            alert('Veuillez vous connecter pour ajouter des produits au panier.');
            return;
        }

        if (product.quantity < quantity) {
            alert(`La quantité demandée n'est pas disponible en stock.`);
            return;
        }

        const currentCart = Cookies.get('panier');
        const currentCartJSON = currentCart ? JSON.parse(currentCart) : [];

        const updatedCart = [...currentCartJSON, { ...product, quantity }];

        Cookies.set('panier', JSON.stringify(updatedCart));

        try {
            await axios.put(`http://localhost:3000/api/produitsroute/produit/${product.pid}`, { quantity: product.quantity - quantity });
            console.log(`Produit ajouté au panier : ${product.name} (${quantity} unité(s))`);
        } catch (error) {
            console.error('Erreur lors de la décrémentation de la quantité en stock :', error);
        }
    };

    return (
        <div>
            <h1>Liste des produits :</h1>
            <div className='liste'>
                {products.map(product => (
                    <div key={product.pid} className="box-product">
                        {product.image && <img src={`http://localhost:3000/${product.image}`} alt={product.name} style={{ maxWidth: '50%' }} />}
                        <div className='details'>
                        <h2>{product.name}</h2>
                        <div className='pp'>
                        <p>{product.details}</p>
                        <p>Prix : {product.price} €</p>
                        <p>Quantité disponible : {product.quantity}</p>
                        </div>
                        <input type="number" min="1" defaultValue="1" onChange={(e) => setQuantity(e.target.value)} />
                        <button className='btn-panier' onClick={() => addToCart(product, quantity)}>Ajouter au panier</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;
