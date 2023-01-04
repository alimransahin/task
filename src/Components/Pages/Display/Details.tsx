import React from 'react';
import { useParams, Link } from "react-router-dom"
import useFetch from '../../CustomHooks/useFetch';
const Details = () => {
    const { name } = useParams();

    const data = useFetch("https://jsonplaceholder.typicode.com/users");
    
    const details = typeof (data) === 'object' && data?.find((d: any) => d.name === name);
    console.log(details);
    return (
        <div>
            <Link to="/">Go to Home</Link>
            <h2>{details.name}</h2>
            <p>{details.email}</p>
            <p>{details.phone}</p>
            <p >{details.website}</p>
            <p >{details.address.city}</p>
        </div>
    )
}
export default Details;
