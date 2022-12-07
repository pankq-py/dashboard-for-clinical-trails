import React, { useEffect, useState } from 'react';

// for toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

export const IdleTimer = (props) => {
    let loggedInValueFromSessionStorage;
    let timeout = null;

    const warning = (loggedInValueFromSessionStorage) => {
        if (loggedInValueFromSessionStorage == 'true') {
            toast.warning("You will be logged out in 15 secs due to inactivity.", { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
        } else {
            console.log('warning: User is not logged in yet.');
        }
    };

    const autoLogout = (loggedInValueFromSessionStorage) => {
        // console.log('autoLogout: ', loggedInValueFromSessionStorage);
        // console.log("condition inside autoLogout: ", loggedInValueFromSessionStorage == 'true');
        if (loggedInValueFromSessionStorage == 'true') {
            console.log('User was logged out due to inactivity.');
            toast.error('You have been logged out due to inactivity.', { autoClose: 5000, position: toast.POSITION.TOP_CENTER })
            // alert("Session Timeout, user is logged out automatically.");
            sessionStorage.setItem('isLoggedIn', false);
            // setIsLoggedInValue(sessionStorage.getItem('isLoggedIn'));
            // console.log('autoLogout in if: ', isLoggedInValue);
        } else {
            console.log('autoLogout: User is not logged in yet.');
        }
    };

    const restartAutoReset = (loggedInValueFromSessionStorage, event) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
            timeout = setTimeout(function () {
                autoLogout(loggedInValueFromSessionStorage);      //runs second, after 75 secs
            }, 1000 * 15)
            warning(loggedInValueFromSessionStorage)              //runs first, after 60 secs
        }, 1000 * 30);
        // console.log('timeout: ', timeout, ', event: ', event.type);
    };

    const onEventOccur = (event) => {
        // let value = sessionStorage.getItem('isLoggedIn');
        // console.log('onEventOccur: value:  ', value);
        // console.log('onEventOccur: ', event.type, sessionStorage.getItem('isLoggedIn'));
        // setIsLoggedInValue(sessionStorage.getItem('isLoggedIn'));
        loggedInValueFromSessionStorage = sessionStorage.getItem('isLoggedIn');
        restartAutoReset(loggedInValueFromSessionStorage, event);
    };

    useEffect(() => {
        window.addEventListener('mousemove', onEventOccur, false);
        window.addEventListener('click', onEventOccur, false);
        window.addEventListener('keyup', onEventOccur, false);
        window.addEventListener('scroll', onEventOccur, false);
        window.addEventListener('load', onEventOccur, false);
    }, [])

    return (
        <div>
            {props.children}
        </div>
    )
};