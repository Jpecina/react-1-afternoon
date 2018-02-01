import React, { Component } from "react";



class Palindrome extends Component{
    constructor(props){
        super(props)
        this.state = {
            userInput:" ",
            palindrome:" "
        }
        this.handleChange = this.handleChange.bind(this)
        this.palindromeSolve = this.palindromeSolve.bind(this)        
    }


    handleChange(val){
        this.setState({userInput:val})
    } 

    palindromeSolve(userInput) {
        var forwards = userInput;
        var backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');
    
        if ( forwards === backwards ) {
          this.setState({ palindrome: 'true' });
        } else {
          this.setState({ palindrome: 'false' });
        }
      };
       // let newStr = userInput.split("");
        // let paliStr = newStr.reverse();
        // if (newStr === paliStr){
        //     console.log(paliStr);
        // }
    
    
    render(){
    return (
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () =>this.palindromeSolve(this.state.userInput)}>Check Me!!</button>
            <span className="resultsBox">Palindrome:{this.state.palindrome}</span>

        
        </div>

    );
}
} 
export default Palindrome;