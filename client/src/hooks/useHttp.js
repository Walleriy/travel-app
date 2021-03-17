import { useCallback, useState } from 'react'

export const useHttp = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true);
        try {
            const response = await fetch(url, {
                method,
                body,
                headers
            })
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так');
            }
            setLoading(false);
            return data;
        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    const cleanError = () => {
        setError(null);
    }
    return { request, error, cleanError, loading };
}