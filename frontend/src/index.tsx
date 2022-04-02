import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import AppContainer from './containers/AppContainer';

import Home from './pages/Home';
import Editor from './pages/Editor';

ReactDOM.render(
  <ChakraProvider>
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </Router>
    </AppContainer>
  </ChakraProvider>,
  document.getElementById('root'),
);
