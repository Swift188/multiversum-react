import React, { useContext, useState } from 'react'

export function loginProvider() {
    const [loggedIn, setLoggedIn] = useState(false)

    function setLogin() {
        setLoggedIn()
    }
}
