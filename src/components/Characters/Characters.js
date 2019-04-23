import React from 'react'
import './Characters.css';

function CharacterCards(props) {
    return (
        
        <div className = 'card'>
            
               <img className = 'card-img-top' alt={props.image.replace('.png', '')} src={require('../../images/' + props.image)} onClick={props.imageClick}/>
            
        </div>
    )
}

export default CharacterCards