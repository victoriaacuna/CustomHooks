import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import HookApp from '../HookApp';


describe('Pruebas en HookApp', () => {

    test('should show it correctly', () => {
        const wrapper = shallow(<HookApp/>);
        expect(wrapper).toMatchSnapshot();
    });
    


});