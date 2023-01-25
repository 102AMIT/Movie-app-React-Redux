// {
//     type : 'ADD_MOVIES'
//     movie: []
// }

// Actions type
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';

// Action creators
export function displaymovie (movies) {
    return {
        type: ADD_MOVIES,
        movies:movies
    }
}


export function addFavourite (movie) {
    return {
        type: ADD_FAVOURITE,
        movie
    }
}