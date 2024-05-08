import React from 'react'
import useFetch from './useFetch';

const PhoneList=()=> {
    const{data,loading,error}=useFetch( 
        'https://dummyjson.com/products/category/smartphones'
    );
  return (
    <div>
        <h2>Phone List description</h2>
        {data?.map((product)=>{
            return(
                <div>
                    {product.id} - 
                    {product.title} : 
                    "{product.description}"
                </div>
            );
        })}
    </div>
  )
}

export default PhoneList