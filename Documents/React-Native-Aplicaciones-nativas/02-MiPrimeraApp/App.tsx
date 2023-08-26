import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
/* import DimensionsScreen from './src/screens/DimensionsScreen'; */
/* import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen'; */
/* import HolaMundoScreen from './src/screens/HolaMundoScreen'; */
/* import CounterScreen from './src/screens/CounterScreen'; */
/* import PositionScreen from './src/screens/PositionScreen'; */
// import FlexScreen from './src/screens/FlexScreen';
import TaskScreen from './src/screens/TaskScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#28425B' }} >
      <StatusBar
        animated={true}
        backgroundColor="#28425B"
        barStyle="light-content"
        showHideTransition="fade"
        />
      {/* <HolaMundoScreen />
       <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TaskScreen />
    </SafeAreaView>
  );
};

export default App;
