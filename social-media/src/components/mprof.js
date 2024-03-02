// MentorProfile.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase-config';
import { doc, getDoc } from 'firebase/firestore';

const MentorProfile = () => {
  const { mentorId } = useParams();
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    const fetchMentor = async () => {
      const docRef = doc(db, "users", mentorId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setMentor(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchMentor();
  }, [mentorId]);

  if (!mentor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Mentor Profile</h2>
      <p><strong>Name:</strong> {mentor.name}</p>
      <p><strong>Area of Expertise:</strong> {mentor.aoe}</p>
      <p><strong>Bio:</strong> {mentor.bio}</p>
      <p><strong>Time commitment:</strong> {mentor.timec}</p>
      <p><strong>Contact information:</strong> {mentor.email}</p>

    </div>
  );
};

export default MentorProfile;
