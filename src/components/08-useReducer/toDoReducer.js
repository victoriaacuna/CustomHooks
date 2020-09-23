
export const todoReducer = ( state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            console.log(action.payload);
            return state.filter(todo => todo.id !== action.payload);
        case 'toggle':
            // return state.map(toDo => {
            //     if(toDo.id === action.payload){
            //         return {
            //             ...toDo,
            //             done: !toDo.done
            //         } 
            //     } else {
            //         return toDo;
            //     }
            // })
            return state.map( toDo => 
                (toDo.id===action.payload) ? {... toDo, done: !toDo.done} : toDo
            )
        default:
            return state;
    }
    
}