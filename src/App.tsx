import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Chatbot } from './components/ui/Chatbot';
import { AmbientGlow } from './components/ui/AmbientGlow';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { TechStackPage } from './pages/TechStackPage';
import { CertificationsPage } from './pages/CertificationsPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="relative flex min-h-screen flex-col bg-[#fafafa] text-neutral-900 transition-colors duration-200 dark:bg-[#0c0c0e] dark:text-neutral-100 overflow-x-hidden">
          <AmbientGlow />
          <Navbar />
          
          <main className="relative z-10 flex-1">
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/tech-stack" element={<TechStackPage />} />
                <Route path="/certifications" element={<CertificationsPage />} />
              </Routes>
            </div>
          </main>

          <Footer />
          <Chatbot />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
