import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SuperheroesPage = () => {
    const [data, setData] = useState([])
    const [isloading, setIsLoading] = useState(true)
    const [error, setError] = useState ('')

    useEffect(() => {
        axios.get('http://localhost:4000/superheroes6').then((response) => {
            setData(response.data)
            setIsLoading(false)
        }).catch(error => {
            setError(error.message)
            setIsLoading(false)
        })
    }, [])

    if(isloading) {
        return <h2>Loading...</h2>
    }

    if(error) {
        return <h2>{error}</h2>
    }

    return (
        <div>
            <h2>Traditional Superheroes Page</h2>
            {data.map((hero) => {
                return <div key={hero.name}>{hero.name}</div>
            })}
        </div>
    );
};

export default SuperheroesPage;