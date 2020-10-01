import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { ReactExampleRef } from '../../../components/04-useRef/ReactExampleRef';

describe('Pruebas en React Example Ref', () => {
    
    const wrapper = shallow(<ReactExampleRef/>);

    test('should match snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBeFalsy();
    });

    test('should show <MultipleCustomHooks/>', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBeTruthy();
    });
    
    


})
