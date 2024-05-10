import React, { useEffect, useState } from 'react';

function FetchPromise() {
  const [responseData, setResponseData] = useState(false);

  useEffect(() => {

 const urls = [
      'https://jsonplaceholder.typicode.com/users/1',
      'https://jsonplaceholder.typicode.com/users/2',
      'https://jsonplaceholder.typicode.com/users/3'
    ];
    
    const promises = urls.map(url => fetch(url)
    .then(response => {
       
        return response.json();
    })
);
    
    Promise.all(promises)
      .then(responses => {

        console.log('All:', responses);
        setResponseData(true);
      })
     
//Race............................................
   
    // Promise.race(promises)
    //   .then(response => {

    //     console.log('Race:', response);
    //   })
    
//Any........................................................


    // Promise.any(promises)
    //   .then(response => {
    //     console.log('Any:', response);
    //   })
    
  }, []);

  return (
    <div>
      <p>fetch</p>
        {/* {responseData.map((data, index) => (
          <li key={index}>
            {index === 0 && `ID: ${data.id}`}
            {index === 1 && `Name: ${data.name}`}
            {index === 2 && `Email: ${data.email}`}
          </li>
        ))} */}
        {responseData&&(
            <>
               All response success
            </>
        )}
    
    </div>
  );
}

export default FetchPromise;
