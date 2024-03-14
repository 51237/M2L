import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import '../styles/panier.css';

function Panier() {
    const [panier, setPanier] = useState([]);

    useEffect(() => {
        const panierCookie = Cookies.get('panier');

        if (panierCookie) {
            const panierData = JSON.parse(panierCookie);
            setPanier(panierData);
        }
    }, []);

    return (
        <div className="panier-container">
            <h1>Contenu du panier :</h1>
            <ul>
                {panier.map((produit, index) => (
                    <li key={index} className="produit">
                        <div className="produit-info">
                            <img src={`http://localhost:3000/${produit.image}`} alt={produit.nom} />
                            <span className="produit-nom">{produit.name}</span>
                            <span className="produit-prix">{produit.price} €</span>
                            <span className="produit-quantity">{produit.quantity}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Panier;
