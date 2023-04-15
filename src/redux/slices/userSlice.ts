import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { loginUserAsync, verifyAuthAsync } from '../api'

export interface UserDataState {
    loggedIn: boolean
    userData: {
        name: string
        username: string
        email: string
        mobile: string
    } | null
}

const initialState: UserDataState = {
    loggedIn: false,
    userData: null
};


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    // reducers: {
    //     logInUser: async (state, action: PayloadAction<{ username: string; password: string }>) => {
    //         // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //         // doesn't actually mutate the state because it uses the Immer library,
    //         // which detects changes to a "draft state" and produces a brand new
    //         // immutable state based off those changes
    //         await fetch('http://localhost:5000/api/v1/users/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //     },
    //     logout: (state) => {
    //         state.loggedIn = false
    //         state.userData = null
    //     }
    // },
    extraReducers(builder) {
        builder
            .addCase(loginUserAsync.fulfilled, (state, action) => {
                state.loggedIn = true
                state.userData = action.payload?.data
            })
            .addCase(loginUserAsync.rejected, (state, action) => {
                state.loggedIn = false
                state.userData = null
            })
            .addCase(verifyAuthAsync.fulfilled, (state, action) => {
                state.loggedIn = true
                state.userData = action.payload
            })
            .addCase(verifyAuthAsync.rejected, (state, action) => {
                state.loggedIn = false
                state.userData = null
            })
    },
})

// Action creators are generated for each case reducer function
export const { } = userSlice.actions

export default userSlice.reducer