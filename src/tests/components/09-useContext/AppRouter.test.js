import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en el App Router', () => {

    const user = {
        id: 1,
        name: 'Victoria',
    }

    const wrapper = mount(
        <UserContext.Provider value = {{
            user
        }}>
            <AppRouter/>
        </UserContext.Provider>
    );

    test('should match snapshot', () => {

        expect(wrapper).toMatchSnapshot();

    });


})
