import { ThemeType } from '@/redux/slices/pagesSlice';

export const getThemeColors = (theme: ThemeType) => {
  if (theme == 'dark') {
    return {
      text: '#fff',
      background: '#1A1A1A',
    };
  } else {
    return {
      background: '#FFFFFF',
      text: '#141517',
    };
  }
};
