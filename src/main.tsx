import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import List from './pages/List/List.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PaginationProvider } from './context/pagination.tsx';
import './index.css'

const root = document.getElementById("root")
const queryClient = new QueryClient();

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <PaginationProvider>
          <Routes>
            <Route path="/listagem" element={<List />} />
          </Routes>
        </PaginationProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
)
