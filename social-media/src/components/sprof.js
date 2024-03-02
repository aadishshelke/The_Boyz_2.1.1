import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase-config';
import { doc, getDoc } from 'firebase/firestore';

const StartupProfile = () => {
  const { startupId } = useParams(); // Get the startup ID from URL parameters
  const [startup, setStartup] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStartup = async () => {
      const docRef = doc(db, "users", startupId); // Adjust "startups" to your collection name
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setStartup(docSnap.data());
      } else {
        console.log("No such document!");
      }
      setLoading(false);
    };

    fetchStartup();
  }, [startupId]); // Dependency array to re-run the effect if startupId changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!startup) {
    return <div>No such startup found!</div>;
  }

  // Displaying all information from the startup document
  return (
    <div>
      <h2>Startup Profile</h2>
      <p><strong>Name:</strong> {startup.name}</p>
      <p><strong>Area:</strong> {startup.area}</p>
      <p><strong>Description:</strong> {startup.desc}</p>
      <p><strong>Product Details:</strong> {startup.pdetails}</p>
      <p><strong>Target Market:</strong> {startup.market}</p>
      <p><strong>Team and Roles:</strong> {startup.roles}</p>
      <p><strong>Funding Stage:</strong> {startup.fstage}</p>
      <p><strong>Website URL:</strong> <a href={startup.wURL} target="_blank" rel="noopener noreferrer">{startup.wURL}</a></p>
      <p><strong>Contact Info:</strong> {startup.cinfo}</p>
    </div>
  );
};

export default StartupProfile;