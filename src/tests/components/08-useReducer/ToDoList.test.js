import '@testing-library/jest-dom';
import React from 'react';
import {shallow} from 'enzyme';
import { ToDoList } from '../../../components/08-useReducer/ToDoList';
import { demoToDo } from '../../fixtures/demoToDos';

describe('Pruebas en ToDoList', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    
    const wrapper = shallow(<ToDoList
        toDos = {demoToDo}
        handleDelete = {handleDelete}
        handleToggle = {handleToggle}
    />)

    test('should show component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should hace todos', () => {
        // Tiene que mostrar todos los toDos.
        expect(wrapper.find('ToDoItem').length).toBe(demoToDo.length);
        // console.log(wrapper.find('ToDoItem').at(0).props());
        expect(wrapper.find('ToDoItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));

    })
    
    

})
