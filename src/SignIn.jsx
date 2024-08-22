import React, { PureComponent } from 'react'

class SignIn extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <h1>SignUp</h1>
                <button onClick={()=>this.props.getRes(false)}>SignIn</button>
            </div>
            
        )
    }
}

export default SignIn