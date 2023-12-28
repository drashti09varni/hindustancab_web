import React, { useState, useEffect } from 'react';
import GPlace from './GPlace';

const HeroForm = () => {
  const [loadMap, setLoadMap] = useState(false);
  const [basicDate, setBasicDate] = useState(new Date());

  useEffect(() => {
    // Simulating an asynchronous action (e.g., loading the map)
    const timeout = setTimeout(() => {
      setLoadMap(true);
    }, 2000);

    return () => clearTimeout(timeout); // Cleanup the timeout to avoid memory leaks
  }, []);

  return (
    <div className="flex justify-center items-center ">
      {!loadMap ? <div>Loading...</div>  : <GPlace />}
    </div>
  );
};

export default HeroForm;
