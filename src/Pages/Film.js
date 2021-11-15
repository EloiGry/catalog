import React, { Component } from 'react';
import films from '../films.json'

class Film extends Component {
    render() {
    const { id } = this.props.match.params
    const film = films.find(f => f.id == id)
    
        return (
            <div>
                <div>  
                    <p> {film.title}</p>
                    <p> {film.director}</p>
                    <p> {film.stars}</p>
                    <img src={film.image} alt="affiche"/>
                    <p> {film.description}</p>
                </div>
            </div>
        );
    }
}

export default Film;