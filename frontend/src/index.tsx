import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import AppContainer from './containers/AppContainer';

import Home from './pages/Home';
import Editor from './pages/Editor';
import Search from './pages/Search';

ReactDOM.render(
  <ChakraProvider>
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </AppContainer>
    </Router>
  </ChakraProvider>,
  document.getElementById('root'),
);
