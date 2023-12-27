import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Navigator from './navigation/Navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from './modules/redux/Store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <Provider store={store}>
        <SafeAreaProvider>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Navigator />
        </SafeAreaProvider>
      </Provider>
    </>
  );
};

export default App;
