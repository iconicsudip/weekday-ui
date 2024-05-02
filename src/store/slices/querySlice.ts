import { createSlice } from "@reduxjs/toolkit";

/**
 * The initial state of the query slice
 * experience - The experience of the user
 * searchedCompany - The company the user is searching for
 * searchedLocation - The location the user is searching for
 * jobType - The type of job the user is searching for
 * techStacks - The tech stacks the user is searching for
 * roles - The roles the user is searching for
 * salary - The salary the user is searching for
 */

const initialState = {
    experience: "",
    searchedCompany: "",
    searchedLocation: "",
    jobType: "",
    techStacks: [],
    roles: [],
    salary: "",
};
export const querySlice = createSlice({
    name: "query",
    initialState: initialState,
    reducers: {
        setQuery: (state, action) => {
            state= {
                ...state,
                ...action.payload
            }
            return state
        }
    },
});

export default querySlice.reducer;
export const { setQuery } = querySlice.actions;