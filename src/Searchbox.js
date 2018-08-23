// Imports
//////////
import React, { Component } from 'react';

// This is the view for the searchbox
const SearchBox = ({searchChange}) => {
    return (
        // Return the div holding a searchbox
        // The onChange property of the HTML input tag triggers the function
        // "onSearchChange" in App.js, which is accessible through the searchChange prop
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search a friend"
                onChange={searchChange}
            />
        </div>
    );
}

// Export the searchbox so it can be used on the page
export default SearchBox;