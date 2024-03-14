import React, { useState, useEffect } from 'react';
import '../../styles/Admin/Produits.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Produits = () => {
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/api/produitsroute/produit")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setImage(e.target.files[0]);
        } else if (e.target.name === 'name') {
            setName(e.target.value);
        } else if (e.target.name === 'details') {
            setDetails(e.target.value);
        } else if (e.target.name === 'price') {
            setPrice(e.target.value);
        }
    };

  

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('name', name);
        formDataToSend.append('details', details);
        formDataToSend.append('price', price);
        formDataToSend.append('image', image);

        try {
            if (selectedProduct) {
                const response = await fetch(`http://localhost:3000/api/produitsroute/produit/${selectedProduct.pid}`, {
                    method: 'PUT',
                    body: formDataToSend,
                });

                if (response.ok) {
                    const updatedProduct = await response.json();
                    setProducts(products.map(p => (p.pid === updatedProduct.pid ? updatedProduct : p)));
                    setSelectedProduct(null);
                } else {
                    console.error('Erreur lors de la mise à jour du produit :', response.statusText);
                    setError('Erreur lors de la mise à jour du produit.');
                }
            } else {
                const response = await fetch('http://localhost:3000/api/produitsroute/produit', {
                    method: 'POST',
                    body: formDataToSend,


                });

                if (response.ok) {
                    const data = await response.json();
                    setProducts([...products, data]);
                    setName('');
                    setDetails('');
                    setPrice('');
                    setImage(null);
                    window.location.reload();
                } else {
                    console.error('Erreur lors de la soumission du formulaire :', response.statusText);
                    setError('Erreur lors de la soumission du formulaire.');
                }
            }
        } catch (error) {
            console.error('Erreur lors de la soumission du formulaire :', error);
            setError('Une erreur s\'est produite lors de la soumission du formulaire.');
        }
    };

    const handleDeleteProduct = async (pid) => {
        try {
            const response = await fetch(`http://localhost:3000/api/produitsroute/produit/${pid}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setProducts(products.filter(product => product.pid !== pid));
            } else {
                console.error('Erreur lors de la suppression du produit :', response.statusText);
                setError('Erreur lors de la suppression du produit.');
            }
        } catch (error) {
            console.error('Erreur lors de la suppression du produit :', error);
            setError('Une erreur s\'est produite lors de la suppression du produit.');
        }
    };

    return (
        <section className="add-products">
            <h1>Ajouter un Produit</h1>

            <form onSubmit={handleSubmit}>
                <div className="flex">
                    <div className="inputBox">
                        <span>Nom du produit </span>
                        <input type="text" className="box" required maxLength="100" placeholder="Entrer le nom du produit" name="name" value={name} onChange={handleChange} />
                    </div>
                    <div className="inputBox">
                        <span>Prix du produit </span>
                        <input type="number" className="box" required max="9999999" placeholder="Entrer le prix du produit" name="price" value={price} onChange={handleChange} />
                    </div>
                    <div className="inputBox">
                        <span>Image du produit </span>
                        <input type="file" name="image" accept="image/jpg, image/jpeg, image/png, image/webp" className="box" onChange={handleChange} required />
                    </div>
                    <div className="inputBox">
                        <span>Description du produit </span>
                        <textarea name="details" placeholder="Entrer la description du produit" className="box" required maxLength="500" cols="30" rows="10" value={details} onChange={handleChange} />
                    </div>
                    <input type="submit" value={selectedProduct ? "Modifier le produit" : "Ajouter le produit"} className="btn" name="add_product" />
                </div>
            </form>

            <h1>Liste des Produits :</h1>
            <div className='liste'>
                {products.map(product => (
                    <div key={product.pid} className="box-product">
                        {product.image && <img src={`http://localhost:3000/${product.image}`} alt={product.name} style={{ maxWidth: '100%' }} />}
                        <div className="details">
                        <p>{product.name}</p>
                        <p>{product.details}</p>
                        <p>Prix : {product.price} €</p>
                        <button className='btn2'><Link to={`/edit/${product.pid}`}>Modifier</Link></button>
                        <button className='btn2' onClick={() => handleDeleteProduct(product.pid)}>Supprimer</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Produits;