import React, { useEffect, useState } from 'react';
import BugForm from '../components/BugForm';
import BugList from '../components/BugList';
import { fetchBugs } from '../api/bugAPI';

const Home = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const loadBugs = async () => {
      const data = await fetchBugs();
      setBugs(data);
    };
    loadBugs();
  }, []);

  return (
    <div>
      <h1>🐞 Bug Tracker</h1>
      <BugForm />
      <BugList bugs={bugs} />
    </div>
  );
};

export default Home;
