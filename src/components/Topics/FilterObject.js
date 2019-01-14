import React, { Component } from 'react'

class FilterObject extends Component {
    constructor(){
        super()
        this.state ={
            unFilteredArray: [
                {'name': 'vivian', 'age': 23, 'hairColor': 'brown'}, 
                {'name': 'chris', 'age': 29, 'eyeColor': 'hazel'}, 
                {'name': 'Julie', 'height': 'tall', 'age': 22}, 
                {'name': 'hannah', 'age': 21, 'faveColor': 'blue'}],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    filterUnFilteredArray(prop){
        var unFilteredArray = this.state.unFilteredArray
        var filteredArray = []


        for(var i = 0; i<unFilteredArray.length; i++){
            if(unFilteredArray[i].hasOwnProperty(prop)){
                filteredArray.push(unFilteredArray[i])
            }
        }
        this.setState({filteredArray: filteredArray})
    }

    render(){
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>
                    Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}
                </span>
                <input 
                    className='inputLine' 
                    onChange={(e) => this.handleChange(e.target.value) } 
                />
                <button 
                    className='confirmationButton' 
                    onClick={() => this.filterUnFilteredArray(this.state.userInput)}>
                    Filter
                </button>
                <span className='resultsBox filterObjectRB'>
                    Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
                </span>
            </div>
        )
    }
}
export default FilterObject