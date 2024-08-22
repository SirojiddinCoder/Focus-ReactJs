import React from "react";

class App extends React.Component{
  render(){
    console.log(this.props.title);
    
    return(
      <div>
        <h1>Hi {this.props.title  }</h1>
        <p>{this.props.title} is Js Library</p>
      </div>
    )
  }
}

export default App