import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { CssBaseline } from '@mui/material';

import Home from './pages/Home';
import Header from './components/Header';

ReactDOM.render(
  <>
    <CssBaseline />
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </>,
  document.getElementById('root'),
);
