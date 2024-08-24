import React, { PureComponent } from 'react'
import Class1 from './Class'
import { Hook } from './Hook'



class App extends PureComponent {
  render() {

    return (
      <div style={{display:'flex', alignItems:'center', justifyContent:"space-around"}}>
  
  <Class1 />
  <Hook />
      </div>
      
    )
  }
}

export default App