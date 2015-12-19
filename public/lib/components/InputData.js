import React from "react";

class InputData extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      charName: "",
      planet: "",
      species: "",
      story: "",
      all: []
    };
  }
    updateData(inputKey, e){
      //convert inputs to dropdown instead of text
      this.setState({ [inputKey]: e.target.value});
    }
    captureData(e){
      console.log("EVENT", e,"THIS STATE", this.state)
      var storyInput = this.state; 
      // 1 grab whatever is currently in the input boxes 
      // and set those values equal to a variable 
      var newInput = [this.state.charName, this.state.planet, this.state.species, this.state.story];
      
      // 2 clear the input boxes
      this.charName.setState = "";

      // 3 send form data to the component that will
      // combine the Swapi data with the input data 

      // 4 display the story with the data in the display area

      // 5 *MAYBE* hide the input fields
    }

  render(){
    let {charName, planet, species, story} = this.state; 
    return(
      <div className="InputData">
        <form onSubmit={this.captureData.bind(this) }>
          <input onChange={this.updateData.bind(this, "charName")} value={charName} />
          <input onChange={this.updateData.bind(this, "planet")} value={planet} />
          <input onChange={this.updateData.bind(this, "species")} value={species} />
          <input onChange={this.updateData.bind(this, "story")} value={story} />
          <button type="submit"> Generate Story </button>
        </form>
      </div> 
    )
  }
}

export default InputData

