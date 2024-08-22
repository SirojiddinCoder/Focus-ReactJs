import React, { PureComponent } from 'react'

class SignIn extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
              
    console.log("Constructor");
    }

    componentWillMount(){
        console.log("componentWillMount");
        
    }
    componentDidMount(){
        console.log("componentDidMount");
        
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
        
    }

    //bind   
    render() {
              
    console.log("render");
        return (
            <div>
                <h1>React LifeCycle</h1>
                
            </div>
            
        )
    }
}

export default SignIn