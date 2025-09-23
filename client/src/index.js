import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import reducers from './reducers';

import App from './App';

import './index.css';

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
});

const theme = createTheme();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
);