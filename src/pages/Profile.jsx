import React, { useState } from 'react';
import Header from '../components/Header';
import ProfileInfo from '../components/ProfileInfo';
import Section from '../components/Section';
import BackButton from '../components/BackButton';
import './CSS/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    email: 'gadiel_petlover@example.com',
    name: 'Gadiel Velarde',
    phone: '999 888 777',
  });

  const updateProfile = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  return (
    <div className="profile">
      <BackButton />
      <Header name={profile.name} />
      <ProfileInfo profile={profile} updateProfile={updateProfile} />
      <Section 
        title="Mis mascotas" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etam dictum nulla nec lu" 
        icon="/images/mascotas-icon.jpg" 
      />
      <Section 
        title="Mis suscripciones" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etam dictum nulla nec lu" 
        icon="/images/subscripcion-icon.jpg" 
      />
    </div>
  );
};

export default Profile;
