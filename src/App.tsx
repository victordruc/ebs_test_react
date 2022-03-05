import { StateContextProvider } from 'context/StateContext';
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'pages/Routes/Routes';
import Header from 'components/Header/Header';

const App = () => {
  return (
    <StateContextProvider>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </StateContextProvider>
  );
};

export default App;
