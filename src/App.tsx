import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { MainLayout } from '@/layouts/main-layout';
import { Home } from '@/pages/home';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <MainLayout>
        <Home />
      </MainLayout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;