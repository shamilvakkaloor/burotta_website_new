import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#visit', label: 'Visit Us' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-background/95 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="container-custom flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          {/* Custom Logo Slot */}
          <div className="flex items-center justify-center p-1 bg-white/10 rounded-full">
            <img
              id="navbar-logo"
              src="/placeholder.svg"
              alt="Custom Logo Slot"
              className="h-8 w-8 object-contain"
            />
          </div>
          <span className="font-display text-3xl md:text-4xl text-primary tracking-wider mt-1">
            BUROTTA
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm uppercase tracking-widest text-cream-muted hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cream p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 py-6' : 'max-h-0'
          }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-2xl tracking-wider text-cream-muted hover:text-primary transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
