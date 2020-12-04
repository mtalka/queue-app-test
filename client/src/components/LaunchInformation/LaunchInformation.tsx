import React, { useContext } from 'react';
import { LaunchContext } from '../../context/LaunchContext';
import { useStyles } from "./LaunchInformation.styles";

function LaunchInformation() {
    const classes = useStyles();
    const launch = useContext(LaunchContext);
    return (
        <>
            <div className={classes.launchName}>{ launch.name }</div>
            <div className={classes.launchDate}>Launch { new Date().toISOString() }</div>
        </>
    );
}

export default LaunchInformation;