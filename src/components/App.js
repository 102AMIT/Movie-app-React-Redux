import { useEffect } from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { displaymovie , setShowFavourites} from '../actions';
import { useSelector, useDispatch } from 'react-redux';
function App() {
   //Using useSelector hook for continiously looking for the changes in store and refect the changes in components
  const movies = useSelector(state => state.list);
  const favourites = useSelector(state => state.favourites);
  const showFavourites = useSelector(state => state.showFavourites);
  // console.log(movies);
  // console.log("favourites",favourites);
  const dispatch = useDispatch(); // it's is a hook for store.
  // setUser will return an object with type and payload.Dispatch will take this object and look 
  //through the reducers that match the action type.
  // console.log(dispatch);


  // initial rendinging 
    useEffect(() => {
      const renderMovies = () => {
        dispatch(displaymovie(data));
      }
      renderMovies();
    }, [dispatch]);

    // here we are checking the movies is favorites or not 
    const isMovieFavourite = (movie) => {
      const index = favourites.indexOf(movie);//if index not found return -1;
      if (index !== -1) {
          // found the movie
          return true;
      } else {
          return false;
      }
    }
    // if we are on movies page then display all the movies if we are on favorites page then  display only favorites movies
    const displayMoviesSorted = showFavourites ? favourites : movies;

    // this is help us to change the tab using conditional expression
    const onChangeTab = (val) =>{
      dispatch(setShowFavourites(val));
    }

  return (

    <div className="App">
      <div className="header"></div>
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavourites ? 'active-tabs' :' '}`} onClick={() => onChangeTab(true)}>Favourites</div>
        </div>
        <div className="list">
          {displayMoviesSorted.map((movie, index) => {
            return <MovieCard movie={movie} key={`movies-${index}`}  isFavourite={isMovieFavourite(movie)}/>
          })}
        </div>
        {displayMoviesSorted.length === 0 ? <div className='no-movies'>No movies to display</div> : null}
      </div>
    </div>
  );
}

export default App;
