import React from 'react';
import { useStyles } from './QueuePlace.styles';

function QueuePlace() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.placeDesc}>Your place in queue</div>
            <div className={classes.currentPlace}>957</div>
            <div className={classes.estimatedDesc}>Estimated queue time</div>
            <div className={classes.estimate}>Launch + 1 minute</div>
        </>
    );
}

export default QueuePlace;