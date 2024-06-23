import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:3001/plugins';

export interface PluginData {
  id: string;
  name?: string | undefined;
  image?: string;
  description?: string;
  link?: string
}

export const createPlugin = createAsyncThunk<PluginData, PluginData>(
  'wordpress/createPlugin',
  async (pluginData) => {
    const response = await axios.post(apiUrl, pluginData);
    return response.data;
  }
);

export const updatePlugin = createAsyncThunk<PluginData, PluginData>(
  'wordpress/updatePlugin',
  async (pluginData) => {
    const response = await axios.put(`${apiUrl}/${pluginData.id}`, pluginData);
    return response.data;
  }
);

export const findPluginById = createAsyncThunk<PluginData, string>(
  'wordpress/findPluginById',
  async (pluginId) => {
    const response = await axios.get(`${apiUrl}/${pluginId}`);
    return response.data;
  }
);

export const foundPlugin = createAsyncThunk<PluginData[], void>(
  'wordpress/foundPlugin',
  async () => {
    const response = await axios.get(`${apiUrl}`);
    return response.data;
  }
);

export const deletePlugin = createAsyncThunk<string, string>(
  'wordpress/deletePlugin',
  async (pluginId) => {
    await axios.delete(`${apiUrl}/${pluginId}`);
    return pluginId;
  }
);
