import React, { useState } from 'react';
import './CSS/CreateActivityForm.css';

const CreateActivityForm = ({ addActivity }) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addActivity(form);
    setForm({
      name: '',
      description: '',
      location: '',
    });
  };

  return (
    <form className="create-activity-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre de la actividad:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Descripción:</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Lugar:</label>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="create-button">Crear actividad</button>
    </form>
  );
};

export default CreateActivityForm;
