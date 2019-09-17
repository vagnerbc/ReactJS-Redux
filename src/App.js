import React from 'react';
import { Provider } from 'react-redux';
import store from './store'

import './App.css';

import Sidebar from './components/Sidebar';
import Video from './components/Video';
import Repository from './components/Repositories';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <Sidebar />
        <Repository />
      </Provider>
    </div>
  );
}

export default App;
