import React, { useEffect, useReducer } from 'react';
import { ToDoAdd } from './ToDoAdd';
// import { useForm } from '../../hooks/useForm';
import { ToDoList } from './ToDoList';
import { todoReducer } from './toDoReducer';


const init = () => { 

    return JSON.parse(localStorage.getItem('toDos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender react',
    //     done: false
    // }]
}

export const ToDoApp = () => {

    const [toDos, dispatch] = useReducer(todoReducer, [], init);
    

    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify(toDos));
        return () => {
            
        }
    }, [toDos])

    // console.log(description);

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if(description.trim().length <= 1){
    //         return;
    //     }

    //     const newToDo  = {
    //         id: new Date().getTime(),
    //         desc: description,
    //         done: false
    //     };

        
    // }

    const handleDelete = (toDoID) => {

        console.log(toDoID);
        const action = {
            type: 'delete',
            payload: toDoID
        };
        dispatch(action);

    }

    const handleToggle = (toDoID) => {
        dispatch({
            type: 'toggle',
            payload: toDoID
        })
    }

    const handleAddToDo = (newToDo) => {
        const action = {
            type: 'add',
            payload: newToDo
        };

        dispatch(action);
    }

    return (
        <div>
            <h1>ToDo App: ({toDos.length})</h1>
            <hr/>

            <div>
                <ToDoAdd handleAddToDo={handleAddToDo}/>
            </div>

            <ToDoList 
                toDos={toDos} 
                handleDelete={handleDelete}
                handleToggle={handleToggle}
            />
        </div>
    )
}
