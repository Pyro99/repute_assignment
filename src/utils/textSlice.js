import {createSlice} from "@reduxjs/toolkit";

const textSlice = createSlice({
    name : "textSlice",
    initialState : [""],
    reducers : {
        sendMessage : (state,action) => {
            state = state.push(action.payload);
        }
    }
})

export const {sendMessage} = textSlice.actions;
export default textSlice.reducer;