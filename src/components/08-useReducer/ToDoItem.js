import React from 'react'

export const ToDoItem = ({toDo, index, handleDelete, handleToggle}) => {

    const {id, desc, done} = toDo;


    return (
        <li 
            key={toDo.id}
            className="list-group-item"
            style={{display: "flex"}}
        >
            <p 
                className={`${done ?'complete mt-3':'mt-3'}`}
                onClick={() => {handleToggle(id)}}
            >
                    {index+1}. {desc}
            </p>
            <button className="btn btn-danger ml-5" 
            onClick={() => handleDelete(id)}
            >Eliminar</button>
        </li>
    )
}
