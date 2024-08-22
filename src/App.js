import React, { PureComponent } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
        active:false,
    }
  }

  render() {

    const getRes = (value)=>{
      console.log(value);
      this.setState({active:value})
      
    }
    return (
      <div>
         {
        this.state.active?  <SignIn getRes={getRes} /> : <SignUp getRes={getRes} />
      }
     
      </div>
      
    )
  }
}

export default App