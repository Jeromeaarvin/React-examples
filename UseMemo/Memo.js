import React, { useMemo, useState } from 'react';

export default function Login() {

     const [expensive,setexpensive] = useState(10);

  const calcbasedonexpensive = (amt) => {
    const user = {
        expensive : amt,
      value: amt * 100,
    };
    return user;
  };

  const valueofexpensive = useMemo(() => {
    return calcbasedonexpensive(expensive);
  }, [expensive]);

  console.log(valueofexpensive)



  return (
    <>
      <div className='app'>
        <h1>{expensive}</h1>
        <br></br>
        <input
          value={expensive}
          onChange={(e) => {setexpensive(e.target.value)}}
          className="border rounded w-20 text-gray-700 mr-5"
        />
        {valueofexpensive.value}


        <br></br>

      </div>
    </>
  );
}