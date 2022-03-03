import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import taskService from './taskService';

const initialState = {
    tasks: [],
    task: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

export const createTask = createAsyncThunk('task/create', async (taskData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await taskService.createTask(taskData, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTask.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createTask.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(createTask.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
            })
    }
})


export const { reset } = taskSlice.actions;
export default taskSlice.reducer;
