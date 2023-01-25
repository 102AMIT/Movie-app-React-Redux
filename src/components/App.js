import { useEffect } from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { displaymovie } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const movies = useSelector(state => state.list); //useSelector look for the full store and look for the changes and refect the changes in components
  // console.log(movies);
  const dispatch = useDispatch(); // it's is a hook for store.
  // setUser will return an object with type and payload.Dispatch will take this object and look through the reducers that match the action type.
    // console.log(dispatch);

    useEffect(() => {
      const renderMovies = () => {
        dispatch(displaymovie(data));
      }
      renderMovies();
    }, [dispatch]);


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
            return <MovieCard movie={movie} key={`movies-${index}`} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
