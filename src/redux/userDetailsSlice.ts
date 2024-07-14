import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface userDetails {
    name: string
    email: string
}


const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState: {
        name: '',
        email: ''
    } as userDetails,
    reducers: {
        initUser: (state, action: PayloadAction<userDetails>) => {
            const { name, email } = action.payload
            state.name = name,
                state.email = email

        }
    }
})

export const { initUser } = userDetailsSlice.actions

export default userDetailsSlice.reducer