import React from "react";

class State extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count:0,
            title:"salomlar"
        }
    }

    render(){

 const plus =()=>{
    
    this.setState({count:this.state.count + 1})
 }

 const minus =()=>{
    this.setState({count:this.state.count - 1})
  
 }

 const Onchange =(event)=>{ 
    console.log(event.target.value);
    this.setState({title:event.target.value})
    
 }

        return(
            <div>
            <h3>Count: {this.state.count}</h3>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                <br />
                <h4>Tanlash uchun</h4>
                <h1>{this.state.title}</h1>
                <input onChange={Onchange} type="text" placeholder="test...." />

            </div>
        )
    }
}

export default State;