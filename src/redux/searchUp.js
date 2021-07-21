import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'searchDb',
    initialState:{
        searchMe: "Fight Club",
        change: false
    },
    reducers:{
        setSearchMe: (state, data) =>{
            state.searchMe = data.payload;
        },
        setChange: (state, val) => {
            state.change = val.payload;
        }
    }
});

export const { setSearchMe, setChange } = searchSlice.actions;
export default searchSlice.reducer