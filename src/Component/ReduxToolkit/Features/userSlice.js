import { createSlice } from "@reduxjs/toolkit";

const user = {
    name: 'abdelaaziz',
    country: 'ma',
    age: 20,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: user,
    reducers: {
        resetUser: (state) => {
            state.name = undefined
            state.age = undefined
            state.country = undefined
        },
        updateUser: (state, action) => {
            console.log(state)
            const {name, country, age} = action.payload
            state.name = name
            state.age = age
            state.country = country
        },
    }
})
export const {updateUser, resetUser} = userSlice.actions
export default userSlice.reducer