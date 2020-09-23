import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //     setCounter(counter + 1);
    // };

    // Uso del callback.
    // Cuando se tiene que mandar una función y el componente está memorizado. (Generaría una nueva versión en cada 
    // renderización del componente padre )
    // Cuando se tiene un useEffect que tiene una dependencia que es una función
    const increment = useCallback( (num) => {
        setCounter(c => c+num);
    }, [setCounter]);

    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr/>
            <ShowIncrement increment={increment}/>
        </div>
    )
}
