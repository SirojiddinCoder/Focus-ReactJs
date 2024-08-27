import React, { useState } from 'react'

export const Hook = () => {

  const [count,setCount] = useState(0)
  return (
    <div>
        <h1>Hook Components</h1>

        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count - 1)}>-</button>
        <button onClick={()=>setCount(count  + 1)}>+</button>
    </div>
  )
}
