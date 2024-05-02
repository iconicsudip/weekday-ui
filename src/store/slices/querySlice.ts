import { createSlice } from "@reduxjs/toolkit";

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