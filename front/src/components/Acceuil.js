import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import image from '../assets/Image2.png';
import '../styles/acceuil.css';
import { Link } from 'react-router-dom';
function Acceuil() {
    const [userName, setUserName] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const adresse = "1, rue du Président-Wilson 54000 Nancy";
    const numero = "06.01.02.03.94";
    const email = "M2lorraine@ecole-ipssi.net";

    useEffect(() => {
        // Récupérer le token à partir du cookie
        const token = Cookies.get('token');

        if (token) {
            // Décoder le token pour obtenir les informations
            const decodedToken = jwtDecode(token);
            const userEmail = decodedToken.email;
            const userIsAdmin = decodedToken.isAdmin;

            // Mettre à jour le nom d'utilisateur dans le state
            setUserName(userEmail);
            setIsAdmin(userIsAdmin);
        }
    }, []);


    return (
        <div>
            <h1>Bienvenue, {userName || 'invité'} !</h1>
            {isAdmin && <p>Vous êtes administrateur.</p>}
            {/* Autres éléments de votre page d'accueil */}
            <img src={image}></img>
            <br></br>
            <p>La Maison des Ligues de Lorraine vous proposera beaucoup d'équipements indispensables pour tous les sports allant du tennis au bowling passant par des pagaies. Notre but est de développer et d'équiper tous les complexes sportifs de la région Lorraine, c'est pour cette raison que vous allez pouvoir récupérer ces articles à prix réduits. Bonne Visite et bon Sport !</p>
            <br></br>
            <button><Link to="/shop">Accéder au catalogue</Link></button>
            <h2>Contactez-nous :</h2>
            <br></br>
            <li><strong>Numéro de téléphone :</strong> {numero}</li>
            <li><strong>Adresse :</strong> {adresse}</li>
            <li><strong>E-mail :</strong> {email}</li>
        </div>
    );
}

export default Acceuil;