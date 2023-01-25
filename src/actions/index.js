// {
//     type : 'ADD_MOVIES'
//     movie: []
// }

// Actions type
export const ADD_MOVIES = 'ADD_MOVIES';

// Action creators
export function displaymovie (movies) {
    return {
        type: ADD_MOVIES,
        movies:movies
    }
}