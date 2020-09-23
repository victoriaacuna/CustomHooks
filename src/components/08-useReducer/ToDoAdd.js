import React from 'react';
import { useForm } from '../../hooks/useForm';

export const ToDoAdd = ({handleAddToDo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: '',

    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1){
            return;
        }

        const newToDo  = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddToDo(newToDo);
        reset();

        
    }

    return (
        <div>
            <h3>Agregar To Do</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    placeholder="Aprender..."
                    autoComplete="off"
                    className="form-control"
                    onChange={handleInputChange}
                    value={description}
                />
                <button 
                    className="btn btn-outline-primary mt-2 mb-5 btn-block"
                    type="submit"
                >
                        Agregar
                </button>
            </form>
            
        </div>
    )
}
