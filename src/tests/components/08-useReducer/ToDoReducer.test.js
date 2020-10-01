import '@testing-library/jest-dom';
import { todoReducer } from '../../../components/08-useReducer/toDoReducer';
import { demoToDo } from '../../fixtures/demoToDos';

describe('Pruebas en ToDoReducer', () => {

    test('should return default state', () => {
        const state = todoReducer(demoToDo, {});
        expect(state).toEqual(demoToDo);
    });

    test('should add new toDo', () => {

        const state = todoReducer(demoToDo, {
            type: 'add', 
            payload: 
                {id: 3,
                desc: 'Aprender Angular',
                done: false}
            });
        expect(state).toEqual([...demoToDo, {id: 3, desc: 'Aprender Angular', done: false}])
    });

    test('should delete a toDo', () => {

        const state = todoReducer(demoToDo, {
            type: 'delete', 
            payload: 2
            });
        expect(state.length).toBe(1)
    });
    
    test('should toggle a toDo', () => {

        const state = todoReducer(demoToDo, {
            type: 'toggle', 
            payload: 2
            });
        expect(state[1].done).toBe(!demoToDo[1].done);
    });
    

})
