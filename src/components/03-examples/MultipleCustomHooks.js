import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

    const {state:counter, increment} = useCounter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
   
    // Si existe la data, la constante toma ese valor.
    const {author, quote} = !!data && data[0];

    return (
        <div>
            <h1>Custom Hooks!!</h1>
            <hr/>

            {
                loading 
                ?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                :
                <>
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                    <button className="btn btn-primary" onClick={increment}>
                        Siguiente quote
                    </button>
                </>
            }
        </div>
    )
}
