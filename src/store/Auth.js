import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const uri = process.env.REACT_APP_API_KEY

const initialAuthState = {
  isAuthenticated: false,
  User: '',
  UserType: '',
  Branch:'',
  
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state, actions) {
      const data = axios.post(uri + "/Auth/Login",
        {
          "UserName": actions.payload.username,
          "Password": actions.payload.Password,
        },
        {
          crossOrigin: true

        }).then((res) => {
          localStorage.setItem('_User', JSON.stringify(res.data))
        }
        )
        .catch(error => window.alert(error))
      var userDetails = JSON.parse(localStorage.getItem('_User'));
      console.log(userDetails)
      if (localStorage.hasOwnProperty('_User')) {
        console.log(userDetails)
        state.isAuthenticated = true;
        state.User = userDetails.UserName;
        state.UserType = userDetails.UserType;
        state.Branch = userDetails.BranchID
      }

    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.clear();
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;