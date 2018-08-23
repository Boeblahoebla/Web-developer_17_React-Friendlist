// Imports
//////////
import React from 'react';   // View library
import './css/cardlist.css'; // Cardlist CSS style
import Card from './Card'    // The Card component

// The component of the full cardlist: a div holding all the cards (each in its own div)
const Cardlist = ({robots}) => {

    // Start the return callback for every robot in the robots array
    // to build up all the robots in the array using its own Card
    const robotCardsArray = robots.map(function(someValue, i){
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    });

    // Return the array of all the robots ... It must be contained in a div
    // so that only one item (the div) gets returned
    return(
        <div>
            {robotCardsArray}   
        </div>

    );
}

// Export the Cardlist to be used on the page
export default Cardlist;