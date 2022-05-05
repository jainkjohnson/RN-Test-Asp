import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {configureStore, Action, Middleware} from '@reduxjs/toolkit';
import thunk, {ThunkAction} from 'redux-thunk';
import {AppContainer} from './app/index';
import {rootReducer, RootState} from './app/redux/reducers';
import {useDispatch} from 'react-redux';
import createDebugger from 'redux-flipper';
import {Palette} from './app/theme/Palatte';

const middlewares: Middleware[] = [];

if (__DEV__) {
  const reduxFlipperDebugger = createDebugger();
  middlewares.push(reduxFlipperDebugger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(thunk).concat(middlewares),
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar backgroundColor={Palette.blue} />
        <AppContainer />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
