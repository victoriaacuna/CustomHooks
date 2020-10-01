import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <NavBar/>

                <Switch>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route exact path="/about" component={AboutScreen}/>
                    <Route exact path="/login" component={LoginScreen}/>

                    // Redirige si no encuentra ninguna ruta (por defecto).
                    <Redirect to="/"></Redirect>
                    
                    // Componente que muestra por defecto si la ruta no existe.
                    {/* <Route component={HomeScreen}/> */}

                </Switch>
            </>
        </Router>
    )
}
