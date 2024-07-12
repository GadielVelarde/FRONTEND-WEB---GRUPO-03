import React, { useState } from 'react';
import './CSS/ProfileInfo.css';

const ProfileInfo = ({ profile, updateProfile }) => {
  const [editing, setEditing] = useState(false);
  const [localProfile, setLocalProfile] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleEdit = () => {

    setEditing(!editing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(localProfile);
    setEditing(false);
  };

  return (
    <div className="profile-info">
      {editing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={localProfile.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={localProfile.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Teléfono:</label>
            <input
              type="text"
              name="phone"
              value={localProfile.phone}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="save-button">Guardar</button>
        </form>
      ) : (
        <>
          <p>Nombre: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Teléfono: {profile.phone}</p>
          <button className="edit-button" onClick={handleEdit}>Editar perfil</button>
        </>
      )}
    </div>
  );
};

export default ProfileInfo;
