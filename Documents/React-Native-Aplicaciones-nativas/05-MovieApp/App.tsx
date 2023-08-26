import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/routes/Navigation';
import GradiantProvider from './src/context/GradiantContext';

const AppState: React.FC = ({ children }) => {
  return (
    <GradiantProvider>
      {children}
    </GradiantProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};

export default App;
