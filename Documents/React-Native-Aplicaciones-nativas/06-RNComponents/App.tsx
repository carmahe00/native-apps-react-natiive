import React, { FC } from 'react';
import 'react-native-gesture-handler';
import StackNavigator from './src/routes/Navigator';
import { ThemeProvider } from './src/context/theme/themeContext';

/* const CustomTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
  },
}; */

const App = () => {
  return (
    <AppState>

      <StackNavigator />

    </AppState>
  );
};

const AppState: FC = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default App;
