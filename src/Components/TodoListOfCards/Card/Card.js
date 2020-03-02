import React from 'react';
import './Card.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

function Card(props) {
    return (
        <div className='card'>
            <div className='icon1' onClick={() => props.click(1)}><FontAwesomeIcon icon={faCheck}/></div>
            <p>{props.name}</p>
            <div className='icon2' onClick={() => props.click(0)}><FontAwesomeIcon icon={faTrash}/></div>
        </div>
    )
}

export default Card
