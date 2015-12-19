import React from "react";
//import UserInputs from "./UserInputs";
import InputData from './InputData';

class AppController extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){

    return(
      <div className="AppController">
        <InputData/>
      </div>
    )
  }
}

export default AppController
