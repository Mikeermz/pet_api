import { useState, useEffect } from 'react';
const api = 'mongodb+srv://mikeermz:ManzAna14@mikee-wvjvk.mongodb.net/pets';

const useGetData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(api)
            .then(resp => resp.json())
            .then(data => setData(data));
    }, []);
    return data;
};

export default useGetData;