import React, { useEffect, useState } from 'react'

export const UseEfect1 = () => {

    const [count,setCount] = useState(0)
 
      useEffect(()=>{
        console.log("case 1");
        
      })
      useEffect(()=>{
        console.log("case 2 ");
        
      },[])

      useEffect(()=>{
        console.log("case 3 ");
        
      },[count])

  return (
    <div>
        <h1>UseEffect</h1>

         <h2>Count:{count}</h2>
         <button onClick={()=>setCount(count - 1)}>-</button>
         <button onClick={()=>setCount(count  + 1)}>+</button>
    </div>
  )
}
