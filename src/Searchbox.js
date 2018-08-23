// Imports
//////////
import React, { Component } from 'react';

// This is the view for the searchbox
class Searchbox extends Component {
    render(){
        return(
            // return the div holding a searchbox
            <div className="pa2">
                <input className="pa3 ba b--green bg-lightest-blue"
                    type="search" 
                    placeholder="Search a friend" 
                />
            </div>
        )
    }
}

// Export the searchbox so it can be used on the page
export default Searchbox;