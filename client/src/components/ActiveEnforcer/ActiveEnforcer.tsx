import React from 'react';
import superQueueLogo from "./../../superQueueLogo.png";
import { useStyles } from './ActiveEnforcer.styles';

function ActiveEnforcer() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.signInDesc}>Got a SuperQueue account? <span className={classes.logInLink}>Sign in</span> to not lose your place in queue</div>
            <div>CAPTCHa goes here</div>
            <div><img alt='logo' style={{ width: 100 }} src={superQueueLogo} /></div>
        </>
    );
}

export default ActiveEnforcer;