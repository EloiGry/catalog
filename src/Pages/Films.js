import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import films from '../films.json'


class Home extends Component {
    constructor() {
        super()
        this.state = {
            films : [...films]
        }
    }
    render() {
        const {films} = this.state

        return (
            <>
                <h1> Home </h1>
                <div className="d-flex flex-column"> 
                    {films.map(film => (<Link to={`/films/${film.id}`} key={`${film.title}`}>
                    {film.title} </Link>))}
                </div>
                
            </>
        );
    }
}

export default Home;