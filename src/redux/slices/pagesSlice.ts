import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ThemeType = 'dark' | 'light' | null;

interface ThemeBaseColors {
  background: string;
  text: string;
}

export interface PagesDataState {
  header: number | null;
  page: string | null;
  theme: ThemeType;
  themeBaseColor: ThemeBaseColors;
}

const initialState: PagesDataState = {
  header: 0,
  theme: null,
  page: '/',
  themeBaseColor: {
    background: '#fff',
    text: '#000',
  },
};

export const pagesSlice = createSlice({
  name: 'pages',
  initialState: initialState,
  reducers: {
    changeTheme(
      state,
      action: PayloadAction<{ theme: ThemeType; themeColors?: ThemeBaseColors }>
    ) {
      state.theme = action.payload.theme;
      localStorage.setItem('theme', action.payload.theme ?? 'light');
      if (action.payload.themeColors) {
        state.themeBaseColor = action.payload.themeColors;
      }
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
      localStorage.setItem('theme', action.payload.theme ?? 'light');
    },
  },
});

export const { changeHeader, changePage, changePageState, changeTheme } =
  pagesSlice.actions;

export default pagesSlice.reducer;
