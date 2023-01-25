import { DISPLAY_MOVIES , ADD_TO_FAVOURITE , REMOVE_FROM_FAVOURITE , SET_SHOW_FAVOURITE} from '../actions';


// this is the initialStage when our movies are not stored in store .
const initialMoviesState = {
    list :[],
    favourites :[],
    showFavourites :false
}

const movies = (state = initialMoviesState ,action) => {
    // if(action.type === DISPLAY_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;
    console.log(action) //in action we are getting info of the object*****
    
    // the better way to do this action.type using switch cases 
    switch (action.type) {
        // display all the movies we have available
        case DISPLAY_MOVIES:
            return {
              ...state,
              list: action.movies
            }
        // display all the favourites movies we have available
        
        case ADD_TO_FAVOURITE:
            return {
             ...state,
             favourites: [action.movie , ...state.favourites]
            }
        // here we are removing/filtering favourites movies from the favourites array 
        case REMOVE_FROM_FAVOURITE:
            const filteredArray = state.favourites.filter(movie => movie.titile !== action.movie.title);
            return {
                ...state,
                favourites: filteredArray
            };

        case SET_SHOW_FAVOURITE:
            return {
              ...state,
              showFavourites: action.val
            }

        // if there is no case match then we return default state.
        default :
            return state;
    }
}

export default movies;