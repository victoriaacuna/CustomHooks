import '@testing-library/jest-dom';
import { renderHook} from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Pruebas en useFetch', () => {

    test('should return default values', () => {

        // Para reenderizar el hook se ha de utilizar este método.
        const {result} = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));

        // Como este es síncrono, se va a ejecutar antes de que se resuelva el useFetch.
        const {data, loading, error} = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
        
    });

    test('should return info, loading=false, error=false', async() => {
        // Para reenderizar el hook se ha de utilizar este método.
        const {result, waitForNextUpdate} = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));

        await waitForNextUpdate();

        const {data, loading, error} = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);

    });

    test('should handle error', async() => {
        // Para reenderizar el hook se ha de utilizar este método.
        const {result, waitForNextUpdate} = renderHook( () => useFetch('https://reqres.in/apid/users?page=2'));

        await waitForNextUpdate();

        const {data, loading, error} = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la info.');

    });
    
    
});