// Imports
//////////
import React, { Component } from 'react'; // View library
import Cardlist from './Cardlist';        // The full Cardlist component
import Searchbox from './Searchbox';      // The Searchbox component
import {robots} from './robots';          // The robots object for data
import 'tachyons';                        // CSS library

// This is the view for the whole app
class App extends Component {
    constructor(){
        super();
        // The state is something that can change and affect the app
        // It usually resides in the parent component which can pass its state
        // to its children
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    // Custom function onSearchChange
    onSearchChange = (event) => {
        // Each time a change in the searchfield is registered 
        // reset the state with the new value. (use key-value pairs)
        this.setState({searchfield: event.target.value});
    }

    // Render method of the component
    render() {
        // With each render of the page:
        // Fetch the new value and filter the current state 
        // with the current value in the searchfield
        const newValue = this.state.searchfield.toLowerCase();
        const filteredFriends = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(newValue);
        });

        console.log(filteredFriends);
        return(
            // return the div holding a header, searchbox & the full Cardlist 
            // where every robot has its own Card
            // The searchbox has a prop which is the function "onSearchChange"
            // The robots prop reads the data from the "state"
            <div className="tc">
                <h1>Friendlist</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Cardlist robots={filteredFriends}/>
            </div>
            
        )
    }
}

// Export the full App to be used on the page
export default App;