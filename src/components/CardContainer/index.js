import React, { Component } from "react";
import "./style.css";
import characters from '../../characters.json'
import CharacterCard from '../CharacterCard'


class CardContainer extends Component {

    state = {
       characters
    }

    handleClick = (id) => {
    console.log("clicked #", id)
    this.shuffleCards();
    }

    shuffleCards = () => {
        const cast = this.state.characters;
       
            for (let i = cast.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [cast[i], cast[j]] = [cast[j], cast[i]];
            }
            this.setState({characters: cast});
        }
        
    

    render() {
    return (
        <div className="cards">
        <div className="container mt-3">
          <div className="row justify-content-center">
        
        {this.state.characters.map(character =>
            <CharacterCard 
            id={character.id}
            name={character.name}
            key={character.name}
            image={character.image}
            onClick={this.handleClick}/>)}
        </div>
        <div className="w-100 d-none d-md-block"></div>
        </div>
        </div>
    )
}

}
export default CardContainer;
