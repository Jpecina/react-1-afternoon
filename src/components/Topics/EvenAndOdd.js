import React, { Component } from "react";



class EvenAndOdds extends Component{
    constructor(){
        super();
        this.state = {
            evenArray: [];
            oddArray: [];
            userInput: "";
        }
    }
    render(){
    return(
        <h4>"EvenAndOdds"</h4>
        <div className = "puzzleBoxEvenAndOddPB"></div>
        <input className = "inputLine"></input>
        <button className = "resultsBox"></button>
        <span className = "resultsBox"></span>
        <span className = "resultsBox"></span>
    );
}
evenArray(){
    
}
oddArray(){
    
}
} 
export default EvenAndOdds;