import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { preloadCriticalResources, addResourceHints } from './utils/performance'

// Initialize performance optimizations
addResourceHints();
preloadCriticalResources();

createRoot(document.getElementById("root")!).render(<App />);
