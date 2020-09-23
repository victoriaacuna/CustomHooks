import React, { useRef } from 'react'

export const FocusScreen = () => {

    // El useRef puede cambiar a lo que apunta el ref sin tener que reenderizar.
    const inputRef = useRef()

    const handleCLick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }


    return (
        <div>
            <h1>Focus Screen</h1>

            <input 
                className="form-control"
                placeholder="Su nombre..."
                ref={inputRef}
            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick={handleCLick}
            >
                Focus
            </button>
        </div>
    )
}
