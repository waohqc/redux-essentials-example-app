import { createSlice } from '@reduxjs/toolkit'

const userInitialState = [
  { id: '0', name: 'Tianna Jenkins' },
  { id: '1', name: 'Kevin Grant' },
  { id: '2', name: 'Madison Price' },
]

const userSlice = createSlice({
  name: 'users',
  initialState: userInitialState,
  reducers: {

  },
})


export default userSlice.reducer