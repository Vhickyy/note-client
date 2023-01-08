import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./context/Authcontext";
import { NotecontextProvider } from './context/Notecontext';
import { DeleteContextProvider } from './context/Deletecontext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <NotecontextProvider>
        <DeleteContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DeleteContextProvider>
      </NotecontextProvider>
    </AuthProvider>
  </React.StrictMode>
);
