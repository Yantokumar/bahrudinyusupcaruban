import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Proyek', path: '/projects' },
    { name: 'Pengalaman', path: '/experience' },
    { name: 'Teknologi', path: '/tech-stack' },
    { name: 'Sertifikasi', path: '/certifications' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/60 bg-[#fafafa]/80 backdrop-blur-md transition-colors duration-200 dark:border-neutral-800/60 dark:bg-[#0c0c0e]/80">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
        >
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors"
          >
            <Terminal className="h-3.5 w-3.5" />
          </motion.div>
          <span>{profileData.handle.toLowerCase().endsWith('.dev') ? profileData.handle.slice(0, -4) : profileData.handle.replace('@', '')}</span>
          <span className="text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
            .Dev
          </span>
        </Link>

        {/* Desktop Navigation with Animated Sliding Active Pill */}
        <nav className="hidden items-center gap-1 sm:flex relative">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative rounded-lg px-3 py-1.5 text-xs font-medium transition-colors"
              >
                {active && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-lg bg-neutral-200/80 dark:bg-neutral-800"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    active
                      ? 'text-neutral-900 dark:text-neutral-100 font-semibold'
                      : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200'
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button with Rotate Spring Animation */}
          <motion.button
            whileTap={{ scale: 0.9, rotate: 180 }}
            whileHover={{ scale: 1.05 }}
            onClick={toggleTheme}
            aria-label="Ganti mode tema"
            title="Ganti mode terang/gelap"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-700 shadow-2xs hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 transition-colors cursor-pointer overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {theme === 'dark' ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: 90, scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="h-4 w-4 text-amber-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: -90, scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="h-4 w-4 text-neutral-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Buka menu navigasi"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-700 sm:hidden dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-neutral-200 bg-white px-4 py-3 sm:hidden dark:border-neutral-800 dark:bg-neutral-950 overflow-hidden"
          >
            <nav className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
              >
                Beranda (Ringkasan)
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg px-3 py-2 text-xs font-medium ${
                    isActive(link.path)
                      ? 'bg-neutral-100 font-semibold text-neutral-900 dark:bg-neutral-900 dark:text-white'
                      : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
