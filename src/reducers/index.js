import { DISPLAY_MOVIES , ADD_TO_FAVOURITE , REMOVE_FROM_FAVOURITE} from '../actions';

const initialMoviesState = {
    list :[],
    favourites :[]
}

const movies = (state = initialMoviesState ,action) => {
    // if(action.type === DISPLAY_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;
    console.log(action)
    switch (action.type) {
        
        case DISPLAY_MOVIES:
            return {
              ...state,
              list: action.movies
            }

        case ADD_TO_FAVOURITE:
            return {
             ...state,
             favourites: [action.movie , ...state.favourites]
            }

        case REMOVE_FROM_FAVOURITE:
            const filteredArray = state.favourites.filter(movie => movie.titile !== action.movie.title);
            return {
                ...state,
                favourites: filteredArray
            };


        default :
            return state;
    }
}

export default movies;