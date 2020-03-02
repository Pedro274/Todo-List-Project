import React, {useState, useEffect} from 'react';
import './TodoListOfCards.scss';
import Card from './Card/Card'
import axios from 'axios';

function TodoListOfCards() {

    const [todoList,
        setTodoList] = useState([]);
    const [input,
        setInput] = useState('')
    const [countOfTaskCompleted,
        setCountOfTaskCompleted] = useState([])
    const [fetchNewUrlAtCommand,
        setFetchNewUrlAtCommand] = useState(true)

    useEffect(() => {
        const fetch = async() => {
            const response = await axios.get('/PHM');
            const newArrList = await response
                .data
                .slice(0, 7);
            return setTodoList(newArrList);
        }
        fetch()
    }, [fetchNewUrlAtCommand])

    const handleEnter = (event) => {
        let List = [...todoList]
        if (event.keyCode === 13 && input !== '') {
            List = [
                ...List, {
                    label: input,
                    done: false
                }
            ]
            setInput('')
            const putRequest = async() => {
                try {
                    await axios.put('/PHM', List);
                    setFetchNewUrlAtCommand(!fetchNewUrlAtCommand)
                } catch (error) {
                    console.log(error)
                }
            }
            putRequest()
        }
    }

    const handleClick = (number, index) => {
        let arrCopy = [...todoList];
        const taskCompleted = arrCopy.splice(index, 1)
        if (number) {
            setCountOfTaskCompleted([
                ...countOfTaskCompleted,
                taskCompleted[0]
            ])
        }
        const putRequest = async() => {
            try {
                await axios.put('/PHM', arrCopy);
                setFetchNewUrlAtCommand(!fetchNewUrlAtCommand)
            } catch (error) {
                console.log(error)
                alert ('You need to have at least one goal in life')
            }
        }
        putRequest()
    }

    const list = todoList.map((todo, index) => {
        return <Card
            key={index}
            name={todo.label}
            click={(number) => handleClick(number, index)}/>
    })

    const completedList = countOfTaskCompleted.map(item => item) // using it like this to improve the functionality later.

    return (
        <div className='listContainer'>
            <div className='input_field'>
                <p>Add ToDo</p>
                <input
                    type='text'
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyUp={event => handleEnter(event)}/>
            </div>
            <div className='list_of_cards'>
                {list}
            </div>
            <div>
                <p>
                    Count of Completed Task : {completedList.length}</p>
            </div>
        </div>
    )
}

export default TodoListOfCards
