import React from "react";


class Class1 extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count:0,
        }
    }
    render(){
        return(
            <div>
                <h1>Class Components</h1>
                <h3>Count:{this.state.count}</h3>
                <button onClick={()=>this.setState({count:this.state.count - 1})}>-</button>
                <button onClick={()=>this.setState({count:this.state.count + 1})}>+</button>
                
            </div>
        )
    }
}

export default Class1;