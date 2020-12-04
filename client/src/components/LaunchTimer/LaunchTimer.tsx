import React, { useContext, useEffect, useState } from 'react';
import { LaunchContext } from '../../context/LaunchContext';
import { useStyles } from './LaunchTimer.styles';

function LaunchTimer() {
    const classes = useStyles();
    const launch = useContext(LaunchContext);
    let timeLeft = "";
    const [leftString, setLeftString] = useState(timeLeft);

    const countDownDate = new Date(launch.date).getTime();
    let x = setInterval(() => {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        console.log(seconds);

        // Display the result in the element with id="demo"
        timeLeft = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        setLeftString(timeLeft);
        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            timeLeft = "LIVE"
        }
    }, 1000);

    return (
        <>
            <div className={classes.timeLeft}>Time left to launch</div>
            <div className={classes.launchTimer}>{ leftString }</div>
        </>
    );
}

export default LaunchTimer;