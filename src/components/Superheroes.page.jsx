import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SuperheroesPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/superheroes').then((response) => {
            setData(response.data)
        })
    }, [])

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