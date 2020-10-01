import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'victoria',
        email: 'victoria@gmail.com'
    }

    test('should return default values', () => {

        // Para reenderizar el hook se ha de utilizar este método.
        const {result} = renderHook( () => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;
        // console.log(values);

        expect(values).toBe(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
        
    });

    test('should handle input change (cambiar name)', () => {
        const {result} = renderHook( () => useForm(initialForm));
        const [values, handleInputChange] = result.current;

        act( () => {
            handleInputChange({target:{value:'Neinu', name: 'name'}});
        });
        const [newValues] = result.current
        console.log(newValues);
        expect(newValues).toEqual({...initialForm, name: 'Neinu'});
        // expect(newValues.name).toEqual('Neinu')
    });
    
    test('should handle input change (cambiar name)', () => {
        const {result} = renderHook( () => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;

        act( () => {
            handleInputChange({target:{value:'Neinu', name: 'name'}});
            reset();
        });
        const [newValues] = result.current
        console.log(newValues);
        expect(newValues).toEqual({...initialForm});
        // expect(newValues.name).toEqual('Neinu')
    });
    
    
});