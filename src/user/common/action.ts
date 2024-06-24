import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:3002';

export interface User {
  id: string;
  email?: string | undefined;
  password?: string;
}
export const fetchUsers = createAsyncThunk<User[]>(
  'users/fetchUsers',
  async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  }
);

// User Registration
export const registerUser = createAsyncThunk('user/register', async (userData: { email: string; password: string }) => {
  const response = await axios.post(`${apiUrl}/users`, userData);
  return response.data;
});

// User Login
export const loginUser = createAsyncThunk('user/login', async (userData: { email: string; password: string }) => {
  const response = await axios.get(`${apiUrl}/users`, {
    params: {
      email: userData.email,
      password: userData.password,
    },
  });

  const user = response.data.find((user: any) => user.email === userData.email && user.password === userData.password);

  if (!user) {
    throw new Error('Invalid credentials');
  }

  return user;
});
