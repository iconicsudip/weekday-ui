import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    roles: [],
    
};
export const querySlice = createSlice({
    name: "query",
    initialState: initialState,
    reducers: {
        setQuery: (state, action) => {
            state = {
                ...state,
                ...action.payload,
            }
        }
    },
});

export default querySlice.reducer;
export const { setQuery } = querySlice.actions;