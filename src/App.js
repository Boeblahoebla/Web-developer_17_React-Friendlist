// Imports
//////////
import React, { Component } from 'react'; // View library
import Cardlist from './Cardlist';        // The full Cardlist component
import Searchbox from './Searchbox';      // The Searchbox component
import {robots} from './robots';          // The robots object for data

// this is the view for the whole app
class App extends Component {
    render() {
        return(
            // return the div holding a header, searchbox & the full Cardlist 
            // where every robot has its own Card
            <div className="tc">
                <h1>Friendlist</h1>
                <Searchbox />
                <Cardlist robots={robots}/>
            </div>
            
        )
    }
}

// Export the full App to be used on the page
export default App;