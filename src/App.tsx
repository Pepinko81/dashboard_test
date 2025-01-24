import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './components/Layout';
import Dashboard from './pages/Dashboard';
import Miners from './pages/Miners';
import Blocks from './pages/Blocks';
import Payments from './pages/Payments';
import Connect from './pages/Connect';
import FAQ from './pages/FAQ';
import Support from './pages/Support';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="miners" element={<Miners />} />
            <Route path="blocks" element={<Blocks />} />
            <Route path="payments" element={<Payments />} />
            <Route path="connect" element={<Connect />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="support" element={<Support />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;