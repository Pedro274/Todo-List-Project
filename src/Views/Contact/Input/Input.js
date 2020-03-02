import React from 'react';
import './Input.scss';

function Input(props) {

    let inputToDisplay = null;

    switch (props.inputtype) {
        case 'input':
            inputToDisplay = <input className='input_type_text' {...props}/>
            break;
        case 'textarea':
            inputToDisplay = <textarea className='input_type_textarea' {...props}/>
            break;
        default:
            inputToDisplay = <input type='submit' value='submit' className='input_button' {...props}  />
    }

    return (
        <div>
            {inputToDisplay}
        </div>
    )
}

export default Input
