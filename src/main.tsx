import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header.tsx';
import { Auth } from './pages/Auth.tsx';
import { NotFound } from './pages/NotFound.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/auth' element={<Auth />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>,
)
