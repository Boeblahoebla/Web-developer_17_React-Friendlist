// Imports
//////////
import React, { Component } from 'react';         // View library
import Cardlist from './Cardlist'; // The full Cardlist
import {robots} from './robots';   // The robots object for data

// this is the view for the whole app
class App extends Component {
    render() {
        return(
            // return the div holding the full Cardlist 
            // where every robot has its own Card
            <Cardlist robots={robots}/>
        )
    }
}

// Export the full App to be used on the page
export default App;