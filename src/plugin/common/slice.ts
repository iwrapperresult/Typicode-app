import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createPlugin, deletePlugin, findPluginById, foundPlugin, updatePlugin } from './action';
import { RootState } from '../../common/store';

interface PluginData {
  id: string;
  name?: string | undefined;
  image?: string | undefined;
  description?: string | undefined;
  link?: string | undefined;
}

interface PluginState {
  plugins: Record<string, PluginData>;
  loading: boolean;
  error: string | null;
}

const initialState: PluginState = {
  plugins: {},
  loading: false,
  error: null,
};

const pluginSlice = createSlice({
  name: 'plugins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create Plugin
      .addCase(createPlugin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPlugin.fulfilled, (state, action: PayloadAction<PluginData>) => {
        state.loading = false;
        state.plugins[action.payload.id] = action.payload;
      })
      .addCase(createPlugin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create plugin';
      })

      // Update Plugin
      .addCase(updatePlugin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePlugin.fulfilled, (state, action: PayloadAction<PluginData>) => {
        state.loading = false;
        state.plugins[action.payload.id] = action.payload;
      })
      .addCase(updatePlugin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update plugin';
      })

      // Find Plugin By Id
      .addCase(findPluginById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(findPluginById.fulfilled, (state, action: PayloadAction<PluginData>) => {
        state.loading = false;
        state.plugins[action.payload.id] = action.payload;
      })
      .addCase(findPluginById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to find plugin';
      })

      // Delete Plugin
      .addCase(deletePlugin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePlugin.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        delete state.plugins[action.payload];
      })
      .addCase(deletePlugin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete plugin';
      })
      .addCase(foundPlugin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(foundPlugin.fulfilled, (state, action: PayloadAction<PluginData[]>) => {
        state.loading = false;
        state.plugins = action.payload.reduce((acc, plugin) => {
          acc[plugin.id] = plugin;
          return acc;
        }, {} as { [id: string]: PluginData });
      })
      .addCase(foundPlugin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to list plugins';
      });
  },
});

export const selectPlugins = (state: { plugins: PluginState }) => state.plugins.plugins;
export const selectPluginById = (state: RootState, id: string) => state.plugins.plugins[id];
export const selectLoading = (state: { plugins: PluginState }) => state.plugins.loading;
export const selectError = (state: { plugins: PluginState }) => state.plugins.error;

export default pluginSlice.reducer;
