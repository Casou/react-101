import {useEffect, useState} from "react";

const withClock = (WrappedComponent) => ({ ...props }) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());

      return () => clearInterval(intervalId);
    }, 1000);
  }, []);

  return <WrappedComponent
    {...props}
    time={currentTime.toLocaleTimeString()}
  />
};

export default withClock;
