import React, {useEffect, useState} from 'react';

const Clock = () => {
  const [ date, setDate ] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()));

    return () => clearInterval(interval);
  }, []);

  return date.toLocaleTimeString();
};

export default Clock;