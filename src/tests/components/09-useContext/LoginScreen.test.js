import '@testing-library/jest-dom';
import React from 'react';
import {mount} from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';

describe('Pruebas en el Login Screen', () => {

    const setUser = jest.fn();

    const wrapper = mount(<UserContext.Provider value={{
        setUser
    }}>
        <LoginScreen/>
    </UserContext.Provider>
    );

    test('should match snapshot', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should handdle setUser with the specific value', () => {

        wrapper.find('button').simulate('click');
        expect(setUser).toHaveBeenLastCalledWith({
            id: 1234,
            name: 'Victoria',
            last_name: 'Acuna',
            email: 'vics@gmail.com'
        })


    });
    
    
})

