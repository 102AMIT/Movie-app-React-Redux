import React from 'react'

const movies = (state = [] ,action) => {
    if(action.type === 'ADD_MOVIES'){
        return action.movies;
    }
    return state;
}

export default movies;