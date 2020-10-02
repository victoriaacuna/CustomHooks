import '@testing-library/jest-dom';
import React from 'react';
import {mount, shallow} from 'enzyme';
import { ToDoApp } from '../../../components/08-useReducer/ToDoApp';
import { demoToDo } from '../../fixtures/demoToDos';
import { act } from '@testing-library/react';

describe('Pruebas en ToDoAdd', () => {


    const wrapper = shallow(<ToDoApp/>);
    Storage.prototype.setItem = jest.fn(() => {});
    
    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should add ToDo', () => {
        // mount es como shallow, pero se trae todo el contexto (info de padres, hijos, etc).
        const wrapper = mount(<ToDoApp/>);
        act( () => {
            wrapper.find('ToDoAdd').prop('handleAddToDo')(demoToDo[0]);
            wrapper.find('ToDoAdd').prop('handleAddToDo')(demoToDo[1]);
            wrapper.find('ToDoAdd').prop('handleAddToDo')({id: 3, desc: 'Aprender Angular', done: false});
        });

        expect(wrapper.find('h1').text().trim()).toBe('ToDo App: (3)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);

    });

    test('should add ToDo', () => {

        wrapper.find('ToDoAdd').prop('handleAddToDo')(demoToDo[0]);
        wrapper.find('ToDoList').prop('handleDelete')(demoToDo[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('ToDo App: (0)');

    });

})