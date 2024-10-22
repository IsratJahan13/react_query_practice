import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const RQSuperheroesPage = () => {
    const { isLoading, data } = useQuery('super-heroes', () => {
        return axios.get('http://localhost:4000/superheroes')
    })

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>React Query Superheroes Page</h2>
            {
                data?.data.map((hero) => {
                    return <div key={hero.name}>{hero.name}</div>
                })
            }
        </div>
    );
};

export default RQSuperheroesPage;