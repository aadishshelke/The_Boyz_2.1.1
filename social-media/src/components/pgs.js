import React, { useState } from 'react';
import { db } from '../firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const MentorSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) return; // Prevent empty query
    setLoading(true);

    const q = query(collection(db, "users"), where("aoe", "==", searchTerm));
    const querySnapshot = await getDocs(q);

    const mentorsFound = [];
    querySnapshot.forEach((doc) => {
      mentorsFound.push({ ...doc.data(), id: doc.id });
    });

    setMentors(mentorsFound);
    setLoading(false);
  };

  return (
    <div>
      <h2>Search Mentors by Area of Expertise</h2>
      <form onSubmit={handleSearch}>
        <input 
          type="text"
          placeholder="Enter area of expertise"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading ? <p>Loading...</p> : null}

      <ul>
        {mentors.map((mentor) => (
          <li key={mentor.id}>
            {mentor.name} - {mentor.aoe}
            <button onClick={() => navigate(`/mprof/${mentor.id}`)}>View Profile</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorSearch;