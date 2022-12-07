import React from 'react'

export default function Profile() {
    const isLoggedInValue = JSON.parse(sessionStorage.getItem('isLoggedIn'));
    console.log("is logged in: " + isLoggedInValue);
    return (
        <>
            {
                isLoggedInValue == true ? 'Profile Page value' : 'This page isn\'t available, coz no user logged in'
            }
        </>
    )
}
