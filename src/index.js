import React from 'react';
import {LogBox} from 'react-native';

import AppNavigator from './AppNavigator';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const App = () => {
  return <AppNavigator />;
};

export default App;
