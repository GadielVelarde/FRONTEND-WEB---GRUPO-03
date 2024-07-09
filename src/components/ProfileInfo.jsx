import React from 'react';
import './CSS/ProfileInfo.css';

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <p>Email: gadiel_petlover@example.com</p>
      <p>Phone: 999 888 777</p>
      <p>Joined: March 3rd</p>
      <button className="edit-button">Editar perfil</button>
      <button className="delete-button">Eliminar cuenta</button>
    </div>
  );
};

export default ProfileInfo;
