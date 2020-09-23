const { logDOM } = require("@testing-library/react");


const initialState = [{
    id: 1,
    toDo: 'Comer pan',
    done: false
}];

const toDoReducer = (state = initialState, action) => {

    if(action?.type === 'agregar'){
        return [...state, action.payload]
    }
    return state;
};

let toDos = toDoReducer();
console.log(toDos);

const newToDo = {
    id: 2,
    toDo: 'Comer queso',
    done: false
};

const action = {
    type: 'agregar',
    payload: newToDo
}

toDos = toDoReducer(initialState, action);

console.log(toDos);