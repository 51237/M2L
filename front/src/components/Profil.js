import React, { useState } from 'react';
import axios from 'axios';

const ProfileEditForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        'http://localhost:3000/api/usersroute/modifierprofil',
        {
          uid: 'l', // Remplacez par l'ID de l'utilisateur actuellement connecté,
          newName: name,
          newEmail: email,
          newPassword: password,
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      setMessage('Une erreur s\'est produite lors de la modification du profil.');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Modifier Votre Profil</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          E-mail:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Mot de passe:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Enregistrer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProfileEditForm;
