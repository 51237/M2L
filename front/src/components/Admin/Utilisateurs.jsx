import React, { useEffect, useState } from "react";
import '../../styles/Admin/Utilisateurs.css';

function Utilisateurs() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/usersroute/utilisateurs");
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des utilisateurs");
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (uid) => {
        try {
            const response = await fetch(`http://localhost:3000/api/usersroute/utilisateurs/${uid}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setUsers(users.filter(user => user.uid !== uid));
            } else {
                console.error('Erreur lors de la suppression de l\'utilisateur :', response.statusText);
            }
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'utilisateur :', error);
        }
    };

    return (
        <div className="container">
            <h1>Liste des utilisateurs :</h1>
            {users && users.length > 0 ? (
                users.map((user) => (
                    !user.admin && (
                        <div key={user.uid} className="user-card">
                            <div className="user-info">
                                <div>
                                    <h3 className="user-name">{user.name}</h3>
                                    <p className="user-email">{user.email}</p>
                                </div>
                                <button onClick={() => handleDelete(user.uid)} className="delete-button">Supprimer</button>
                            </div>
                        </div>
                    )
                ))
            ) : (
                <div>Aucun utilisateur trouvé</div>
            )}
        </div>
    );
}

export default Utilisateurs;