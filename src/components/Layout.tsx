import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import FloatingContact from './FloatingContact';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
      setIsScrolled(scrollY > 100);
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [scrollDirection]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Who We Help', path: '/who-we-help' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-neutral-900 font-sans selection:bg-neutral-200">
      {/* Navigation */}
      <header 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-neutral-200/50",
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent border-transparent",
          scrollDirection === 'down' && isScrolled ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-semibold tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">
                BasalOps
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center md:gap-4 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "font-medium transition-colors hover:text-neutral-900 md:text-xs lg:text-sm whitespace-nowrap",
                    location.pathname === link.path ? "text-neutral-900" : "text-neutral-500"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book-a-meeting"
                className="inline-flex items-center justify-center text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all active:scale-95 md:px-4 md:py-2 md:text-xs lg:px-5 lg:py-2.5 lg:text-sm whitespace-nowrap font-medium"
              >
                Book a Meeting
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -mr-2 text-neutral-600 hover:text-neutral-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#FAFAFA] border-b border-neutral-200/50 shadow-lg py-4 px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-base font-medium px-4 py-2 rounded-lg transition-colors",
                  location.pathname === link.path ? "bg-neutral-100 text-neutral-900" : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book-a-meeting"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors"
            >
              Book a Meeting
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200/50 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <Link to="/" className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4 block">
                BasalOps
              </Link>
              <p className="text-neutral-500 max-w-sm text-sm leading-relaxed">
                We help small businesses improve their digital presence, systems, and growth with practical, meaningful solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/services" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Services</Link></li>
                <li><Link to="/who-we-help" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Who We Help</Link></li>
                <li><Link to="/how-it-works" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">How It Works</Link></li>
                <li><Link to="/about" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">About</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wider">Connect</h3>
              <ul className="space-y-3">
                <li><Link to="/contact" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Contact Us</Link></li>
                <li><Link to="/book-a-meeting" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Book a Meeting</Link></li>
                <li><a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} BasalOps. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
      <FloatingContact />
    </div>
  );
}
