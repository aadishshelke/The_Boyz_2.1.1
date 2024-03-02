import React, { useState } from 'react';
import { db } from '../firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const StartupSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) return; // Prevent empty query
    setLoading(true);

    // Adjust the query to target the "startups" collection and the "area" field
    const q = query(collection(db, "users"), where("area", "==", searchTerm));
    const querySnapshot = await getDocs(q);

    const startupsFound = [];
    querySnapshot.forEach((doc) => {
      startupsFound.push({ ...doc.data(), id: doc.id });
    });

    setStartups(startupsFound);
    setLoading(false);
  };

  const goToStartupProfile = (startupId) => {
    navigate(`/sprof/${startupId}`);
  };

  return (
    <div>
      <h2>Search Startups by Area</h2>
      <form onSubmit={handleSearch}>
        <input 
          type="text"
          placeholder="Enter area"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading ? <p>Loading...</p> : null}

      <ul>
        {startups.map((startup) => (
          <li key={startup.id}>
            {startup.name} - {startup.area}
            {startup.desc}
            <button onClick={() => goToStartupProfile(startup.id)}>View Profile</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StartupSearch;
