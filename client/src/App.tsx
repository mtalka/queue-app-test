import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LaunchInformation from './components/LaunchInformation/LaunchInformation';
import LaunchTimer from './components/LaunchTimer/LaunchTimer';
import QueuePlace from './components/QueuePlace/QueuePlace';
import ActiveEnforcer from './components/ActiveEnforcer/ActiveEnforcer';

import { useStyles } from "./App.styles";
import { Launch } from './types/Launch';

import { fetchLaunch, LaunchContext } from "./context/LaunchContext";
import { fetchQueuers, QueuerContext } from './context/QueuerContext';
import { Queuer } from './types/Queuer';

function App() {
  const classes = useStyles();
  
  const [launch, setLaunch] = useState<Launch>({} as unknown as Launch);
  const [queuers, setQueuers] = useState<Queuer[]>([]);

  useEffect(() => {
    async function loadLaunch() {
      const launch = await fetchLaunch();
      setLaunch(launch);
    }
    async function loadQueuers() {
      const queuers = await fetchQueuers();
      setQueuers(queuers);
    }

    loadLaunch();
    loadQueuers();
  }, []);

  return (
    <LaunchContext.Provider value={launch}>
      <QueuerContext.Provider value={queuers}>
    <div className={classes.mainContainer}>
      <LaunchInformation />
      <LaunchTimer />
      <QueuePlace />
      <ActiveEnforcer /> 
        </div>
      </QueuerContext.Provider>
    </LaunchContext.Provider>
  );
}

export default App;
