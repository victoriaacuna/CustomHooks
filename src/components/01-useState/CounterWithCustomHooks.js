import React from 'react'
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHooks = () => {

    const {state, increment, decrement, reset} = useCounter();

    return (
        <div>
            <h1>Counter {state}</h1>
            <hr/>
            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>
            <button 
                className="btn btn-primary"
                onClick={reset}
            >
                Reset
            </button>
            <button 
                className="btn btn-primary"
                onClick={decrement}
            >
                -1
            </button>
        </div>
    )
}

