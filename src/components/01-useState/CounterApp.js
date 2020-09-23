import React, {useState} from 'react'

export const CounterApp = () => {

    const [counters, setCounters] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 25,
        counter4: 4
    });

    const {counter1, counter2} = counters;

    const handleAdd = () => {
        setCounters({
            ...counters,
            counter1: counter1+1
        });
        console.log(counters);
    }

    return (
        <div>
            <h1>Counter1 {counter1}</h1>
            <h1>Counter2 {counter2}</h1>
            <hr/>
            <button 
                className="btn btn-primary"
                onClick={handleAdd}
            >
                +1
            </button>
        </div>
    )
}
