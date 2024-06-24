import React from 'react';
import PluginList from './plugin';
import { Header } from './layout/header';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PluginRoutes from './routers';

function App() {
  return (
    <>
    <BrowserRouter>
    <PluginRoutes/>
    </BrowserRouter>
    </>
  );
}

export default App;
