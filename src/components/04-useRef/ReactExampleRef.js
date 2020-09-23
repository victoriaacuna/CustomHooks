import React, { useState } from 'react';
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks';

export const ReactExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>React Example Ref</h1>
            {
                show 
                &&
                (
                    <MultipleCustomHooks/>
                )
            }
            <button 
                className="btn btn-primary" 
                onClick={() => {setShow(!show)}}>
                Show/Hide
            </button>
            
        </div>
    )
}
