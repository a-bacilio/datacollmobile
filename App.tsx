/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'reduxjs-toolkit-persist/integration/react';
import {store, persistor} from './src/appRedux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View>Hola</View>
      </PersistGate>
    </Provider>
  );
}

export default App;
