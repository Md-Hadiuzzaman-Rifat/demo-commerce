import { apiSlice } from "../api/apiSlice"

const initialState={
    category:"All",
    subCategory:[],
    sort:'byRating'
}

export const orderStatusSlice= apiSlice({
    name:"filterSlice",
    initialState,
    reducers:{
        changeStatus:(state,action)=>{
            state[action.payload.id].status=action.payload.status
        }
    }
})

export const {changeStatus}= orderStatusSlice.actions
export default orderStatusSlice.reducer