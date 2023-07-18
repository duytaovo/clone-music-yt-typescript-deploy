// src/features/userSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import songApi from 'src/apis/home.api';
import lyricApi from 'src/apis/lyric.api';
import { List, Song } from 'src/types/types.type';
import { payloadCreator } from 'src/utils/utils';


export const getSongs = createAsyncThunk('song/getSongs', payloadCreator(songApi.getSongs))
export const getChart = createAsyncThunk('song/getChart', payloadCreator(songApi.getChart))
export const getLyric = createAsyncThunk('song/getLyric', payloadCreator(lyricApi.getLyric))

interface SongState {
  error?: string | null,
  songs: any,
  chart:any
}

const initialState: SongState = {
  songs: [],
  chart:[],
  error: null
}

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    
  },
  extraReducers: builder => {
    // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
    builder.addCase(getSongs.fulfilled, (state, { payload }) => {
      state.songs = payload?.data.data.data?.items
    })
    builder.addCase(getChart.fulfilled, (state, { payload }) => {
      state.chart = payload?.data?.data?.data?.RTChart

    })
  }
});


const songReducer = songSlice.reducer;
export default songReducer
