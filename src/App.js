import React, { PureComponent } from 'react'
import SignIn from './SignIn'


class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
   
    }
  }

  render() {

    return (
      <div>
        <SignIn />
    
      </div>
      
    )
  }
}

export default App