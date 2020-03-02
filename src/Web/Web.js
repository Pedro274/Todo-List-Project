import React from 'react'
import './Web.scss';
import {Switch, Route} from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import Home from '../Views/Home/Home';
import Contact from '../Views/Contact/Contact';

function Web() {
    return (
        <div>
            <NavBar />
            <Switch>
                < Route exact path='/' component={Home} />
                < Route path='/Contact' component={Contact} />
                < Route component={Home} />
            </Switch>
        </div>
    )
}

export default Web
