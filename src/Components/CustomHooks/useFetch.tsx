import React, { useEffect, useState } from 'react';

const useFetch = (url:any) => {
    const [data,setData]:any=useState(null);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(result => setData(result))
    },[url])
    
    if(data?.length>0){
    return data;
    }
    if (data === null) {
        setData('loading')
    }
}
export default useFetch;