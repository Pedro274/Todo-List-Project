import React from 'react';
import './Home.scss';
import TodoListOfCards from '../../Components/TodoListOfCards/TodoListOfCards';


function Home() {
    return (
        <div className='home_container'>
            <TodoListOfCards />
        </div>
    )
}

export default Home
