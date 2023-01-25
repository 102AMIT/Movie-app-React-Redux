import React from 'react'
import { useDispatch } from 'react-redux';
import { addFavourite } from '../actions';

const MovieCard = (props) => {
    const {movie , isFavourite} =props;
    const dispatch =useDispatch();

    const handleFavouriteClick = () =>{
        dispatch(addFavourite(movie));
    }

    const handleUnfavouriteClick = () =>{

    }
  return (
    <div className='movie-card'>
        <div className="left">
            <img src={movie.Poster} alt="movie-poster" />
        </div>
        <div className="right">
            <div className="title">{movie.Title}</div>
            <div className="plot">{movie.Plot}</div>
            <div className="footer">
                <div className="rating">{movie.imdbRating}</div>

                {
                    isFavourite ? 
                    <button className="unfavourite-btn" onClick={handleUnfavouriteClick}>Unfavourite</button>
                    :
                    <button className="favourite-btn" onClick={handleFavouriteClick}>Favourite</button>
                }
            </div>
        </div>
    </div>
  )
}

export default MovieCard