import React, { Component } from 'react';
import CharacterCards from "./components/Characters/Characters"
import characters from './characters.json'
import Jumbo from './components/Jumbo/Jumbo'



class App extends Component {

  state = {
    characters,
    charactersPicked: [],
    score: 0

  };



  imageClick = event => {
    const chosenCharacter = event.target.alt
    const characterAlreadyPicked =
      this.state.charactersPicked.indexOf(chosenCharacter) > -1;
    

    if(characterAlreadyPicked) {
      this.setState({
        characters: this.state.characters.sort((a,b) => 0.5 - Math.random()),
        charactersPicked: [],
        score: 0
      });
      alert('You lose! Try again!')
      
  } else {
    
    this.setState({
      characters: this.state.characters.sort((a,b) => 0.5 - Math.random()),
      score: this.state.score + 1,
      charactersPicked: this.state.charactersPicked.concat(chosenCharacter)
    },() => {
      if (this.state.score === 12) {
        alert("Yay! You Win!");
        this.setState({
          characters: this.state.characters.sort((a,b) => 0.5 - Math.random()),
          charactersPicked: [],
          score: 0
        });
      }
    })
  }
}
  

    render() {
      return (
       <div>
        <Jumbo score={this.state.score}/>
        <div className='row'>
        {this.state.characters.map(character => (
          <div className = 'col-sm-2'>
          <CharacterCards
          id={character.id}
          key={character.id}
          image={character.image}
          imageClick={this.imageClick}
          />
          </div>
        ))}
        </div>
        </div>
      
      )
    }
}



export default App;