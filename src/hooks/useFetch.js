import { useEffect, useState } from "react"
    const LocalCache = {};

export const useFetch = (url) => {
    // Save LocalCache

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });

    const getpokemon = async () => {

        if( LocalCache[url]){
            setState({
                data: LocalCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            })
            return (
                {
                    state
                }
            )
        }

        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        })
        const response = await fetch(url);
        await new Promise(re => setTimeout(re, 500))
        if (!response.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText
                },
            })
        }

        const data = await response.json();
        LocalCache[url]=data;
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null,
        })
    }

    useEffect(() => {
        getpokemon()
    }, [url])

  

    return (
        {
            state
        }
    )
}