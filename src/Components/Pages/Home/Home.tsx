import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../CustomHooks/useFetch';
import useFilter from '../../CustomHooks/useFilter';

const Home: React.FC = () => {
    const [key, setKey]: any = useState('');
    const data = useFetch("https://jsonplaceholder.typicode.com/users");
    // console.log(data);

    const filteredData = useFilter(data, key);
    console.log(filteredData);
    filteredData === 0 && console.log("filteredData");
    if (data === 'loading') {
        return <progress className="progress progress-accent w-56"></progress>
    }
    return (
        <div className="overflow-x-auto">
            <input type='text' placeholder='search' onChange={(e) => setKey(e.target.value)} />
            <table className="table w-full">
                <thead>

                    <tr>
                        <th>Sl</th>
                        <th>Name</th>
                        <th>Email</th>
                        {/* <th>Phone</th>
                        <th>Website</th>
                        <th>Adddress</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData?.map((info: any, i: number) => <tr key={i}>
                            
                                <th>{i + 1}</th>
                                <td><Link to={`/${info.name}`}> {info?.name}</Link></td>
                                <td>{info.email}</td>
                                {/* <td>{info.phone}</td>
                            <td>{info.website}</td>
                            <td>{info.address.city}</td> */}
                            
                        </tr>
                        )
                    }

                </tbody>
            </table>
        </div>

    );
};
export default Home;