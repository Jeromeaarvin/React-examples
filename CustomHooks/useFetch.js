import React,{useState,useEffect} from 'react'

const useFetch=(url) =>{

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>{
        const fetchdata = async()=>{
        const response = await fetch(url);
        const result = await response.json();
        setLoading(false);
        setData(result?.products);
    };
    fetchdata();
    },[url]);
    return {data,loading,error};


}

export default useFetch