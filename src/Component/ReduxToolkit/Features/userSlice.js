import { createSlice } from "@reduxjs/toolkit";

const user = {
    name: 'abdelaaziz',
    country: 'us',
    age: 20,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: user,
    reducers: {
        resetUser: (state) => {
            console.log()
            // state.name,
            // state.age,
            // state.country
        },
        updateUser: (state) => {
            // state.name,
            // state.age,
            // state.country
        },
    }
})

export default userSlice.reducer