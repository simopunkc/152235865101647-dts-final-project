import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import PrivateComponent from './components/PrivateComponent';
import Login from './containers/Login';
import DetailArt from './containers/DetailArt';
import ArtList from './containers/ArtList';
import SearchArt from './containers/SearchArt';
import NotFound from './containers/NotFound';
import Register from './containers/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<ArtList />} />
          <Route path="arts/:id_art" element={
            <PrivateComponent loginOnly={true}>
              <DetailArt />
            </PrivateComponent>
          } />
          <Route path="/search/:query" element={<SearchArt />} />
          <Route path="login" element={
            <PrivateComponent loginOnly={false}>
              <Login />
            </PrivateComponent>} />
          <Route path="register" element={
            <PrivateComponent loginOnly={false}>
              <Register />
            </PrivateComponent>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
