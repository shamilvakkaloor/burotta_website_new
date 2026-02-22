import { Instagram, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/30 py-12">
      <div className="container-custom px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-4xl text-primary mb-2">BUROTTA</h3>
            <p className="font-sans text-cream-muted text-sm tracking-wide">
              Lotta Rotta Burotta!
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://www.instagram.com/burotta_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream-muted hover:text-primary transition-colors duration-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6" />
              <span className="font-sans text-sm">@burotta_</span>
            </a>
            <a
              href="https://wa.me/919745119155"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream-muted hover:text-primary transition-colors duration-300"
              aria-label="Contact on WhatsApp"
            >
              <Phone className="w-5 h-5" />
              <span className="font-sans text-sm hidden sm:inline">+91 97451 19155</span>
            </a>
            <a
              href="https://maps.app.goo.gl/2K3vHCM4Ji3QByP27"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream-muted hover:text-primary transition-colors duration-300"
              aria-label="Find us on map"
            >
              <MapPin className="w-5 h-5" />
              <span className="font-sans text-sm hidden sm:inline">Areekode</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/50 mb-8" />

        {/* Bottom Bar */}
        <div className="text-center">
          <p className="font-sans text-sm text-muted-foreground">
            © {currentYear} BUROTTA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
