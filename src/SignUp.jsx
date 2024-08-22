import React, { PureComponent } from 'react'

class SignUp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <h1>SignIn</h1>
                <button onClick={()=>this.props.getRes(true)}>SignUp</button>
            </div>
        )
    }
}

export default SignUp