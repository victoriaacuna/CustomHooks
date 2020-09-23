import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDoList = ({toDos, handleDelete, handleToggle}) => {
    return (
        <div>
            <ul className="list-group list-group-flush">
            {
                toDos.map( (toDo, index) => {
                    return (
                        <ToDoItem
                            key={toDo.id} 
                            toDo = {toDo}
                            index = {index}
                            handleDelete = {handleDelete}
                            handleToggle = {handleToggle}
                        />
                    )
                })
                
            }
                
            </ul>
        </div>
    )
}
