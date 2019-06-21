import React from 'react'

import { UserSession } from 'blockstack'

interface Props {
    userSession: UserSession
}
export const Landing: React.FC<Props> = ({ userSession }) => {
    const signIn = () => userSession.redirectToSignIn()
    return <>
        <p>Landing...</p>

        <button
            onClick={signIn}
        >
            Sign in
        </button>
    </>
}
