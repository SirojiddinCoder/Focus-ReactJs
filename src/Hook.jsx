import React, { useState } from 'react'

export const Hook = () => {

  const [count,setCount] = useState(0)
  const [name,setName] = useState("Test")
  return (
    <div>
        <h1>Hook Components</h1>

        <h2>Count:{count}</h2>
        <h2>Name:{name}</h2>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={()=>setCount(count - 1)}>-</button>
        <button onClick={()=>setCount(count  + 1)}>+</button>

    </div>
  )
}
