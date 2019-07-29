import { useState, useEffect } from 'react';

export default function({ url }) {
    const [loading, setLoading] = useState(true),
        [data, setData] = useState({});

    useEffect(async () => {
        let response = await fetch(url).then(res => res.json());
        setLoading(false);
        setData(response);
    }, [url]);

    return [loading, data];
}