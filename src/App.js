import React, { useState } from 'react';

import { moviesData } from './Components/MoviesData';
import SearchMovie from './Components/SearchMovie/SearchMovie';
import MoviesList from './Components/MoviesList';
import AddMovie from './Components/AddMovie/AddMovie';
import Description from './Components/Description'

import './App.css';
import { Link, Route } from 'react-router-dom';

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="App">
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <Route path="/Readmore" component={Description} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>
    </div>
  );
}

export default App;
