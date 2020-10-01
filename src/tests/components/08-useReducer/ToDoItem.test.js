import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import React from 'react';
import { ToDoItem } from '../../../components/08-useReducer/ToDoItem';
import { demoToDo } from '../../fixtures/demoToDos';

describe('Pruebas en el ToDoItem', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<ToDoItem
        toDo = {demoToDo[0]}
        index = {0}
        handleDelete = {handleDelete}
        handleToggle = {handleToggle}
    />);

    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoToDo[0].id);
    });

    test('should call handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoToDo[0].id);
    });

    test('should show text correctly', () => {
        expect(wrapper.find('p').text().trim()).toBe(`1. ${demoToDo[0].desc}`);
    });

    test('should not have complete as a class', () => {
        expect(wrapper.find('.complete').exists()).toBeFalsy()
    })
    
    
    
    
})
