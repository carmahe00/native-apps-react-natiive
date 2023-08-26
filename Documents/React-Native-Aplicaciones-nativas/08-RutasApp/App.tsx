import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableLatestRenderer } from 'react-native-maps';
import Navigator from './src/routes/Navigator';
import PermissionsContextScreen from './src/context/PermissionsContext';
enableLatestRenderer();
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  return (
    <NavigationContainer>
      <PermissionsContextScreen>
        <Navigator />
      </PermissionsContextScreen>
    </NavigationContainer>
  );
};

export default App;
