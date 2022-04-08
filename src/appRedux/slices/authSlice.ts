import {createSlice} from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {
    user: {},
  },
  reducers: {},
});

export default auth.reducer;
