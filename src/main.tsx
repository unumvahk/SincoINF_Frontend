import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles'; // 👈 Importar correctamente
import theme from './config/theme'; // 👈 Tu tema personalizado
import queryClient from './config/queryClient';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}> {/* ✅ AQUI lo agregas */}
        <BrowserRouter>
          <App />
          <ReactQueryDevtools position='bottom' initialIsOpen={false} />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);