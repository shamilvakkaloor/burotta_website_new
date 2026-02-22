import { ChevronDown } from 'lucide-react';
import heroBurger from '@/assets/hero-burger.jpg';
import Hero3DBackground from './Hero3DBackground';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image & 3D WebGL Elements */}
      <div className="absolute inset-0">
        <img
          src={heroBurger}
          alt="Delicious Burotta - Cheesy Porotta Burger"
          className="w-full h-full object-cover object-center mix-blend-overlay"
        />
        <Hero3DBackground />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Orange Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-up">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-cream leading-none mb-6">
          BUROTTA
        </h1>
        <p className="font-display text-2xl md:text-4xl text-primary tracking-wider mb-8">
          Lotta Rotta Burotta!
        </p>
        <p className="font-sans text-lg md:text-xl text-cream-muted max-w-xl mx-auto mb-12">
          Where crispy layered porotta meets juicy fillings in perfect harmony
        </p>
        <a
          href="#menu"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold uppercase tracking-wider rounded-full hover:glow-orange transition-all duration-500 hover:scale-105"
        >
          Explore Menu
        </a>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-muted hover:text-primary transition-colors duration-300 animate-float"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
