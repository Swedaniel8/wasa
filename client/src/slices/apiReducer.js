import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { contactPost } from '../service/service'

export const contactPosts = createAsyncThunk(
    "post/contact",
    async(info) => {
        const res = await contactPost(info)
        return res.data
    }
)




const postSlice = createSlice({
    name:"post",
    initialState: [],
    extraReducers: {
        [contactPosts.fulfilled]: (state, action) => {
            //return [...action.payload]
        },
       
        
        
    }
})

const { reducer } = postSlice

export default reducer