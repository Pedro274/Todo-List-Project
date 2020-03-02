import React from 'react';
import './Contact.scss';
import Input from './Input/Input';

function Contact() {
    return (
        <div className='contact_container'>
            <div className='form'> 
                <Input inputtype='input' placeholder='Your Name'/>
                <Input inputtype='textarea' placeholder='Comments....' />
                <Input />
            </div>
        </div>
    )
}
export default Contact
