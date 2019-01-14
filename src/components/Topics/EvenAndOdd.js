import React, { Component } from 'react'

class EvenAndOdd extends Component {
    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(number){
        this.setState({ userInput: number})
    }

    handleEvensAndOdds(userInput){
        var arr = userInput.split(',')
        var evens = []
        var odds = []
    
        for( let i = 0; i<arr.length; i++){
            if(arr[i]%2===0){
                evens.push(parseInt(arr[i], 10))
            }
            else if (arr[i]%2===1){
                odds.push(parseInt(arr[i], 10))
            }
        }
        this.setState({ evenArray: evens, oddArray: odds})
    }

    render(){
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4> Evens and Odds </h4>

                <input 
                    className='inputLine' 
                    onChange={(e) => this.handleChange(e.target.value) }
                />

                <button 
                    className='confirmationButton' 
                    onClick={() => {this.handleEvensAndOdds((this.state.userInput)) }}
                > 
                    Split
                </button>

                <span className='resultsBox' > Evens: { JSON.stringify(this.state.evenArray) }</span>
                <span className='resultsBox' > Odds: { JSON.stringify(this.state.oddArray) }</span>

            </div>
        )
    }
}

export default EvenAndOdd;