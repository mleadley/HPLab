import React from 'react';
import CharacterSelector from '../components/CharacterSelector'
import CharacterFact from '../components/CharacterFact'
import LuckyButton from '../components/LuckyButton'

class CharacterContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      currentCharacterFacts: null,
      currentFact: null
    }
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this)
    this.handleButtonClicked = this.handleButtonClicked.bind(this)
  }

  componentDidMount(){
    const url = 'https://hp-api.herokuapp.com/api/characters';
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({characters: data});
      console.log(data);
    });
    request.send();
  }

  handleCharacterSelected(index){
    const character = this.state.characters[index];
    const characterFacts = [];

    if (character.dateOfBirth) {
      characterFacts.push(
        `${character.name} was born on ${character.dateOfBirth}.`
      )
    } else if(character.yearOfBirth) {
      characterFacts.push(
        `${character.name} was born in ${character.yearOfBirth}.`
      )
    }

    if(character.house){
      characterFacts.push(
        `${character.name} lives in ${character.house}.`
      )
    }

    if(character.patronus){
      characterFacts.push(
        `${character.name}'s patronus is a ${character.patronus}.`
      )
    }

    if(character.species){
      characterFacts.push(
        `${character.name} is a ${character.species}.`
      )
    }

    if(character.alive){
      characterFacts.push(
        `${character.name} is alive.`
      )
    } else {
        characterFacts.push(
          `${character.name} is dead.`
        )
      }
    

    this.setState({ currentCharacterFacts: characterFacts })
  }

  handleButtonClicked(event){
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    const factIndex = getRandomInt(0, this.state.currentCharacterFacts.length)

    this.setState({ currentFact: this.state.currentCharacterFacts[factIndex] })
  }

  render(){
    return (
      <div>
        <h2>Random HP Facts</h2>
        <CharacterSelector
          characters={this.state.characters}
          onCharacterSelected={this.handleCharacterSelected} />
        <LuckyButton onButtonClicked={this.handleButtonClicked} />
        <CharacterFact fact={this.state.currentFact} />
      </div>
    )
  }
}

export default CharacterContainer;
