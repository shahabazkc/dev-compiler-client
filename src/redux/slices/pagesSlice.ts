import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ThemeType = 'dark' | 'light' | null;

export interface PagesDataState {
  header: number | null;
  page: string | null;
  theme: ThemeType;
}

const initialState: PagesDataState = {
  header: 0,
  theme: 'dark',
  page: '/',
};

export const pagesSlice = createSlice({
  name: 'pages',
  initialState: initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeType>) {
      state.theme = action.payload;
    },
    changeHeader(state, action: PayloadAction<number>) {
      state.header = action.payload;
    },
    changePage(state, action: PayloadAction<string>) {
      state.page = action.payload;
    },
    changePageState(state, action: PayloadAction<PagesDataState>) {
      state.header = action.payload.header;
      state.page = action.payload.page;
      state.theme = action.payload.theme;
    },
  },
});

export const { changeHeader, changePage, changePageState, changeTheme } =
  pagesSlice.actions;

export default pagesSlice.reducer;
