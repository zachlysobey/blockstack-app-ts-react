import React from 'react'
import { UserSession } from 'blockstack'
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom'

const LandingRedirect: React.StatelessComponent<Partial<RouteProps>> = ({
    location
}) =>
    <Redirect
        to={{
            pathname: "/landing/",
            state: { from: location }
        }}
    />

interface Props extends RouteProps {
    userSession: UserSession,
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>,
}
export const PrivateRoute: React.StatelessComponent<Props> = ({
    component: Component,
    userSession,
    ...rest
}) => {
    const isSignedIn = userSession.isUserSignedIn()
    return (
        <Route {...rest}
            render={props => isSignedIn
                ? <Component {...props} />
                : <LandingRedirect {...props} />
            }
        />
    )
}
