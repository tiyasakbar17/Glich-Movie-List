import React, { useState, useEffect, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Detail from './Detail'
import { pagesMapping, RoutingContext } from './Routing'

function App() {
  const { page } = useContext(RoutingContext)
  return (
    <>
      {(pagesMapping.home === page) && <Home />}
      {(pagesMapping.detail === page) && <Detail />}
    </>
  )
}

export default App;
