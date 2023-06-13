import {createSlice} from "@reduxjs/toolkit";

const chatSlice= createSlice ({
    name : "chatSlice",
    initialState : [],
    reducers :{
        addChatBox : (state,action) => {
            state = state.push(action.payload);
        },
        removeChatBox : (state,action) => {
            const index = action.payload;
            state.splice(index,1);
        },
    }
})

export const {addChatBox,removeChatBox} = chatSlice.actions;
export default chatSlice.reducer;