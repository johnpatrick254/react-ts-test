import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'


// Define a type for the slice state
interface productFilterSliceState {
    options: 'Option A' | 'Option B' | 'Option C' | undefined,
    discount:string,
    note: string| undefined
}

// Define the initial state using that type
const initialState: productFilterSliceState = {
    options: 'Option A',
    discount: '',
    note: '' 
}

export const productFilterSlice = createSlice({
    name: 'productFilter',
    initialState,
    reducers: {
        setFilters: (state,action) => {
            state = action.payload
            console.log("\n*******\nFilters", state, "\n*******")
        },

    }
})

export const { setFilters } = productFilterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFilters = (state: RootState) => state.productFilter;

export default productFilterSlice.reducer