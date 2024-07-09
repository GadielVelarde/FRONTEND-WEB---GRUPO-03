import React from 'react';
import Header from '../components/Header';
import ProfileInfo from '../components/ProfileInfo';
import Section from '../components/Section';
import './CSS/Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <Header />
      <ProfileInfo />
      <Section title="Mis mascotas" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etam dictum nulla nec lu" />
      <Section title="Mis suscripciones" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etam dictum nulla nec lu" />
    </div>
  );
};

export default Profile;
