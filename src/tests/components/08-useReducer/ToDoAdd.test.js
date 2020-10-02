import '@testing-library/jest-dom';
import React from 'react';
import {shallow} from 'enzyme';
import { ToDoAdd } from '../../../components/08-useReducer/ToDoAdd';

describe('Pruebas en ToDoAdd', () => {

    const handleAddToDo = jest.fn();

    const wrapper = shallow(<ToDoAdd handleAddToDo = {handleAddToDo}/>)
    
    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should not call handleAddToDo', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});

        expect(handleAddToDo).toHaveBeenCalledTimes(0);
    });

    test('should call handleAddToDo', () => {

        const value = 'Aprender React';

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});

        expect(handleAddToDo).toHaveBeenCalledTimes(1);
        expect(handleAddToDo).toHaveBeenCalledWith({
            desc: value,
            done: false,
            id: expect.any(Number)
        });

        // Para evaluar el reset del campo.
        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
    

})
