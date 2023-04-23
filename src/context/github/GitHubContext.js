import { createContext, useReducer, useState } from "react";
import githubReducer from "./GitHubReducers";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const searchUser = async (text) => {
        setLoading()
        const params = new URLSearchParams({ q: text })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`)
        const { items } = await response.json()
        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }

    //clears users from state
    const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

    //Set Loading
    const setLoading = () => dispatch({ type: 'SET_LOADING' })


    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUser,
        clearUsers
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext