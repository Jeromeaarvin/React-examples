import React from 'react'
import useFetch from './useFetch'


const ProductsDetails =()=> {

    const{data,loading,error}=useFetch( 
        `https://dummyjson.com/products/search?q=`
    );
  return (
    <div>
        <h2>Full products List</h2>
        {data?.map((product)=>{
            return(
                <div>
                    {product.id}<> - </>
                    {product.title}
                </div>
            );
        })}
    </div>
  )
}

export default ProductsDetails