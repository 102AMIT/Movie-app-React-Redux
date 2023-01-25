import { useEffect } from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { displaymovie } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
function App() {
   //Using useSelector hook for continiously looking for the changes in store and refect the changes in components
  const movies = useSelector(state => state.list);
  const favourites = useSelector(state => state.favourites);
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
      if (index > -1) {
    // found the movie
          return true;
      } else {
          return false;
      }
    }
  return (

    <div className="App">
      <div className="header"></div>
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
          {movies.map((movie, index) => {
            return <MovieCard movie={movie} key={`movies-${index}`}  isFavourite={isMovieFavourite(movie)}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
