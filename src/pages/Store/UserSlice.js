import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('user/loginUser', async (userCredentials) => {
    const request = await axios.post(`http://localhost:1337/api/auth/local`, userCredentials);
    console.log('rq:', request);
    const response = await request.data.user;
    localStorage.setItem('users', JSON.stringify(response));
    console.log('rs:', response);
    return response;
});

export const registerUser = createAsyncThunk('user/registerUser', async (userRegister) => {
    const request = await axios.post(`http://localhost:1337/api/auth/local/register`, userRegister);
    // console.log('RG:',request )
    const responses = await request.data.user;
    // localStorage.setItem("users", JSON.stringify(response));
    // console.log('RGS:',response )
    return responses;
});

export const updateUser = createAsyncThunk('user/updateUser', async (userUpdate) => {
    const request = await axios.put(`http://localhost:3000/users/${userUpdate.id}`, userUpdate);
    const responses = await request.data.user;
    // localStorage.removeItem("users");
    // window.location.href = "/";
    return responses;
});

// export const handleUpload = createAsyncThunk(
//   "user/updateUser",
//   async (handleUploads) => {
//     const request = await axios.post(
//       `http://localhost:3000/file`,
//       handleUploads
//     );
//     const responses = await request.data.file;
//     return responses;
//   }
// );

const userSlice = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        user: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.meta.arg;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                console.log(action.error.message);
                if (action.error.message) {
                    state.error = 'Truy cập bị từ chối! Thông tin không hợp lệ';
                } else {
                    state.error = action.error.message;
                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                console.log(action.error.message);
                if (action.error.message) {
                    state.error = 'người dùng đã tồn tại';
                } else {
                    state.error = action.error.message;
                }
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = true;
                state.user = action.meta.arg;
                state.error = null;
                alert('update thành công');
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                console.log(action.error.message);
                if (action.error.message) {
                    state.error = 'người dùng đã tồn tại';
                } else {
                    state.error = action.error.message;
                }
            });
    },
});

export default userSlice.reducer;
