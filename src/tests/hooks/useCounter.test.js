import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {

    test('should return default values', () => {

        // Para reenderizar el hook se ha de utilizar este método.
        const { result } = renderHook( () => useCounter());
        // console.log(result.current);
        expect(result.current.state).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
        
    });

    test('state should be 15', () => {

        // Para reenderizar el hook se ha de utilizar este método.
        const { result } = renderHook( () => useCounter(15));
        expect(result.current.state).toBe(15);
        
    });

    test('state should increment to 16', () => {
        const { result } = renderHook( () => useCounter(15));
        const { increment } = result.current;
        // Para utilizar las funciones se requiere el act. (Ten cuidado, tienes que importarlo de @testing-library/react-hooks)
        act( () => {
            // Aquí adentro se puede hacer lo que queramos.
            increment();
        });
        const { state } = result.current;
        expect(state).toBe(16);
    });

    test('state should decrement to 14', () => {
        const { result } = renderHook( () => useCounter(15));
        const { decrement } = result.current;
        // Para utilizar las funciones se requiere el act. (Ten cuidado, tienes que importarlo de @testing-library/react-hooks)
        act( () => {
            // Aquí adentro se puede hacer lo que queramos.
            decrement();
        });
        const { state } = result.current;
        expect(state).toBe(14);
    });

    test('state should reset to 16', () => {
        const { result } = renderHook( () => useCounter(15));
        const { increment, reset } = result.current;
        // Para utilizar las funciones se requiere el act. (Ten cuidado, tienes que importarlo de @testing-library/react-hooks)
        act( () => {
            // Aquí adentro se puede hacer lo que queramos.
            increment();
            reset();
        });
        const { state } = result.current;
        expect(state).toBe(15);
    });
    
    
})