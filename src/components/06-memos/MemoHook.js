import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/ProcesoPesado';
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {
    const {state:counter, increment} = useCounter(1500);

    // const procesoPesado = (iteraciones) => {
    //     console.log('hi')
    //     for (let i = 0; i < iteraciones; i++) {
    //         console.log('Ahí vamos...');
    //     }
    //     return `${iteraciones} iteraciones realizadas`
    // }

    // Si el counter cambia, necesito una nueva versión memorizada del resultado de la función.
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>MemoHook</h1>
            <hr/>
            <h1>Counter: <small>{counter}</small></h1>
            {/* <p>{procesoPesado(counter)}</p> */}
            <p>{memoProcesoPesado}</p>
            <button className="btn btn-primary" onClick={increment}>
                +1
            </button>
            <button className="btn btn-outline-primary" onClick={() => {setShow(!show)}}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}