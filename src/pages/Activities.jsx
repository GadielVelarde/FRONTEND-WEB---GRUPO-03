import React, { useState } from 'react';
import CreateActivityForm from '../components/CreateActivityForm';
import './CSS/Activities.css';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
    setShowForm(false);
  };

  return (

    <div className="activities-page">
      <h1>Actividades</h1>
      <button className="add-activity-button" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancelar' : 'Crear Actividad'}
      </button>
      {showForm && <CreateActivityForm addActivity={addActivity} />}
      <div className="activities-list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-item">
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
            <p><strong>Lugar:</strong> {activity.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
