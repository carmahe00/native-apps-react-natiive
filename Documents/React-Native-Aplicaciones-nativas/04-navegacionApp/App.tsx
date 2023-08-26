import React from 'react';
import 'react-native-gesture-handler';
import SideMenu from './src/navigator/SideMenu';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <SideMenuBasics /> */}
        <SideMenu />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default App;
