import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({click,children,...rest}) => {
    console.log(click);
    return (
        <div>
            <Route
                {...rest}
                render={ ({location})=>
                
                click?(children):
                (<Redirect
                    to={{
                    pathname: "/new",
                    state: { from: location }
                  }}
                >

                </Redirect>)
                }
            >

            </Route>
        </div>
    );
};

export default PrivateRoute;