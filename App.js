import React from 'react';
import HomeNavigator from './app/navigation/home-stack';
import { Provider } from './app/context';

const App = () => {
  return (
    <Provider>
    <HomeNavigator/>
    </Provider>
  );
};

export default App;