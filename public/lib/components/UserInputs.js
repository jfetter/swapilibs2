import React from 'react';

class UserInputs extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
      input: "",
      inputArray: []
    }
  }
  trackInput(e){
    this.setState({input: e.target.value}) 
  }
  captureInput(){
  	let inputArray = this.state.inputArray
    inputArray.push(this.state.input) 
    this.setState({input: "", inputArray: inputArray});
    console.log(this.state.inputArray)
  }
  render(){
  	var items = this.state.inputArray.map(function(item, index, all){
  		console.log (item)
  		return <li>{item}</li>
  	})
    return(
      <div className="UserInputs">
        <br />
        <input onChange={this.trackInput.bind(this)} type="text" placeholder="input text here" value={this.state.input} />
        <button onClick={this.captureInput.bind(this)}> button </button>
        <br />
        <ul> {items} </ul>
      </div>
    )
  }
}

export default UserInputs