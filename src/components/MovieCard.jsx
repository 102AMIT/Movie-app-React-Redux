import React from 'react'
import { useDispatch } from 'react-redux';
import { addToFavourite ,removeFromFavourites } from '../actions';

const MovieCard = (props) => {
    // getting movie and isFavourite in props from app component
    const {movie , isFavourite} =props;
    const dispatch =useDispatch();//using dispatch hook to dispatch the action
    
    // favourite button click
    const handleFavouriteClick = () =>{
        dispatch(addToFavourite(movie));
    }

    // Unfavourite button click
    const handleUnfavouriteClick = () =>{
        dispatch(removeFromFavourites(movie));
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

                {   //conditional rendering
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