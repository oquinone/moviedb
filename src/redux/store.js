import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchUp';

export default configureStore({
    reducer:{
        searching: searchReducer
    }
});