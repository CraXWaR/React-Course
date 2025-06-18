import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
    const res = await fetch(url, config);
    const resData = await res.json();

    if (!res.ok) {
        throw new Error(resData.message || 'Something went wrong');
    }

    return resData;
}

export default function useHttp(url, config, initialData) {
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(initialData);

    const sendRequest = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const resData = await sendHttpRequest(url, config);
            setData(resData);
        }catch (error) {
            setError(error.message || 'Something went wrong'); // ✅ fallback to safe string
        }

        setLoading(false);
    }, [url, config]);

    useEffect(() => {
        if (!config || config.method === 'GET' || !config.method) {
            sendRequest();
        }
    }, [sendRequest, config]);

    return {
        data,
        loading,
        error,
        sendRequest,
    };
}
