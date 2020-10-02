import '@testing-library/jest-dom';
import React from 'react';
import {mount} from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en HomeScreen', () => {
    const user = {
        name: 'Victoria',
        email: 'vics@gmail.com'
    }

    // El shallow solo reenderiza el primer componente (el padre). Y en este caso nos interesa saber qué tiene el hijo.
    // Debemos usar mount
    const wrapper = mount(
        <UserContext.Provider value = {{
            user
        }}>
            <HomeScreen/>
        </UserContext.Provider>
    );

    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
