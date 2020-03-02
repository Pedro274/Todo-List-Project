import React from 'react';
import './NavBar.scss';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <div className='rightHand'>
                    <FontAwesomeIcon icon={faClipboardList}/>      
                    <p>ToDo</p>
                </div>
                <div className='LeftHand'>
                    <ul className="navBarUl">
                        <li>
                            <NavLink exact to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default NavBar