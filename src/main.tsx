import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header.tsx';
import { Auth } from './pages/Auth.tsx';
import { NotFound } from './pages/NotFound.tsx';
import { ThemeProvider } from './components/ThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen">
      <ThemeProvider>
        <Header />
        <main role="main">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<App />} />
              <Route path='/auth' element={<Auth />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </main>
      </ThemeProvider>
    </div>
  </StrictMode>,
)
