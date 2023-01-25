// {
//     type : 'ADD_MOVIES'
//     movie: []
// }

// Actions type
export const DISPLAY_MOVIES = 'DISPLAY_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';

// Action creators
export function displaymovie (movies) {
    return {
        type: DISPLAY_MOVIES,
        movies:movies
    }
}


export function addToFavourite (movie) {
    return {
        type: ADD_TO_FAVOURITE,
        movie
    }
}

export function removeFromFavourites (movie) {
    return {
        type: REMOVE_FROM_FAVOURITE,
        movie
    }
}
