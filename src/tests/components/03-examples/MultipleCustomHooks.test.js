import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en Multiple Custom Hooks', () => {

    // Es como una falsa implementación. Finge que lo implementa y puedes usar los valores que retornó (tú especificas lo que retorna)
    useCounter.mockReturnValue({
        counter: 15,
        increment: () => {}
    })

    test('should match snapshot', () => {

        // Tienes que especificar esto porque el mock ya la prueba lo está leyendo y sino te dará error. 
        // (A pesar de que no te interese el mock acá sino en la otra prueba)
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show info', () => {

        // Usas el mock porque no te importa la implementación, solo el resultado (el useFetch ya lo probaste)
        useFetch.mockReturnValue({
            data: [{
                author: 'Vics',
                quote: 'Hola mundo, how r u'
            }],
            loading: false,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks/>);
        // console.log(wrapper.html());
        expect(wrapper.find('.alert').exists()).toBeFalsy();
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola mundo, how r u');
        expect(wrapper.find('footer').text().trim()).toBe('Vics');

    })
    
    
})
