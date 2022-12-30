import axios from "axios";
import {useEffect, useState} from "react";

const base_url = "https://fakestoreapi.com/products";
export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    useEffect(() => {
        (async function () {
            try {
                setLoading(true);
                const response = await axios.get(`${base_url + url}`);
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [url])
    return {data, error, loading};
}