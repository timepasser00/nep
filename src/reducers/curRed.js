import { createReducer } from "@reduxjs/toolkit";

const initialVal = {
    count: 0,
    atul: 'wide',
    ehd: 275,
    jkewhd: 'ed907'
}

const cerRed = createReducer(initialVal, {
    INCREMENT: (state, action) => {
        state.count = state.count + 1
    },
    DECREMENT: (state, action) => {
        state.count = state.count - 1
    },
    SETVAL: (state, action) => {
        state.count = action.payload
    }
})

export default cerRed;