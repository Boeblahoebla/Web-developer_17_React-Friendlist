// Imports
//////////
import React from 'react'; // View library
import './css/card.css';   // Card CSS style
import 'tachyons';         // CSS library

// The component of a single Card: a div holding all the information about 1 robot
const Card = (props) => {

    // Destructurise the props array argument in its 3 items per object: 
    // name, email & id
    const {name, email, id} = props;

    return(
        // Text between `` can be represented as javascript by enclosing it in {}
        // This way we can use a property of the "props" by using ${props.prop}
        //
        // Check the following url: 
        // https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Template_literals
        //
        // In this case the source url generates a robot image using the prop.name as generator
        <div className="fullCard bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
                <img alt="cardPicture" src={`https://robohash.org/${name}${id}${email}?20x20`}/>
                <div className="contactInfo">
                    <h2>{name}</h2>
                    <h5>{email}</h5>
                </div>
            </div>
    )
}

// Export the Card to be used on the page
export default Card;