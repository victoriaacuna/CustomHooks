import React, { useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';
import './layout.css';

export const Layout = () => {

    const {state:counter, increment} = useCounter(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
   
    // Si existe la data, la constante toma ese valor.
    const {quote} = !!data && data[0];

    const pRef = useRef()

    // Es para después de que se haya reenderizado un html.
    useLayoutEffect(() => {
        console.log(pRef.current.getBoundingClientRect());
        return () => {
            
        };
    }, [quote])

    return (
        <div>
            <h1>Layout Effect!</h1>
            <hr/>

            <blockquote className="blockquote text-right">
                <p ref={pRef} className="mb-0">{quote}</p>
            </blockquote>
            <button className="btn btn-primary" onClick={increment}>
                Siguiente quote
            </button>`
        </div>
    )
}