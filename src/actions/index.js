

// Actions type difine here beacuse if we want to change the name then we only need to change here .this is the good practice
export const DISPLAY_MOVIES = 'DISPLAY_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE';

// Action creators
// For Display movies
export function displaymovie (movies) {
    return {
        type: DISPLAY_MOVIES,
        movies:movies
    }
}

// for add Favorites movie
export function addToFavourite (movie) {
    return {
        type: ADD_TO_FAVOURITE,
        movie
    }
}

// for remove movies from  Favorites 
export function removeFromFavourites (movie) {
    return {
        type: REMOVE_FROM_FAVOURITE,
        movie
    }
}

// Setting show favorites for favorites page

export function setShowFavourites (val) { //it's get boolean value true or false.
    return {
        type: SET_SHOW_FAVOURITE,
        val
    }
}
