import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterStore = createSlice({
    'name':'counter',
    initialState:{
        count: 0
    },
    reducers:{
        increment(state){
            state.count++;
        },
        decrement(state){
            state.count--;
        }

    }
})

const{increment, decrement} = counterStore.actions;
export{increment, decrement}
const counterReducer = counterStore.reducer
//export default counterReducer;
const store =configureStore({
    reducer:{
        counter: counterReducer
    }
 })
 export default store;