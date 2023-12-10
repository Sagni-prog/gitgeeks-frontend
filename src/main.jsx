import React from 'react'
import { Provider } from 'react-redux';
import store from './app/store';
import MyRouter from './MyRouter';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store = {store}> 
       <MyRouter />
    </Provider>
);
