// src/features/userSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import playListApi from 'src/apis/playList.api';
import { payloadCreator } from 'src/utils/utils';


export const getPlayList = createAsyncThunk('playlist/getPlayList', payloadCreator(playListApi.getPlayList))
export const getSongDetail = createAsyncThunk('playlist/getSongDetail', payloadCreator(playListApi.getDetailSongFromPlayList))
export const getSongSound = createAsyncThunk('playlist/getSongSound', payloadCreator(playListApi.getSongSound))

interface SongState {
  playlist: any,
}

const initialState: SongState = {
  playlist: [],
}

const playListSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    
  },
  extraReducers: builder => {
    // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
    builder.addCase(getPlayList.fulfilled, (state, { payload }) => {
      state.playlist = payload
    })
  
  }
});


const playListReducer = playListSlice.reducer;
export default playListReducer
