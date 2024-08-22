import React from "react";

class State extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count:0,
        }
    }

    render(){
        return(
            <div>Count: {this.state.count}</div>
        )
    }
}

export default State;