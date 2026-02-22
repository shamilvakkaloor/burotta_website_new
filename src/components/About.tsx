const About = () => {
  return (
    <section id="about" className="section-padding bg-charcoal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Section Label */}
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Our Story
            </p>

            {/* Heading */}
            <h2 className="font-display text-5xl md:text-7xl text-cream mb-12">
              About <span className="text-gradient-orange">BUROTTA</span>
            </h2>

            {/* Brand Story */}
            <div className="space-y-6 text-cream-muted text-lg md:text-xl leading-relaxed">
              <p>
                Born from a love for the humble porotta and a dream to reinvent it,
                BUROTTA brings you a unique fusion that celebrates the best of both worlds —
                the crispy, flaky layers of traditional Kerala porotta embracing bold,
                flavorful fillings that satisfy every craving.
              </p>
              <p>
                Every bite at BUROTTA is crafted with passion, using only the freshest
                halal ingredients and time-honored recipes passed down through generations.
                We believe food should be an experience — comforting yet exciting,
                familiar yet surprising.
              </p>
            </div>

            {/* Decorative Line */}
            <div className="mt-16 flex items-center justify-center lg:justify-start gap-4">
              <div className="h-px w-16 bg-primary/50" />
              <span className="font-display text-2xl text-primary">✦</span>
              <div className="h-px w-16 bg-primary/50" />
            </div>
          </div>

          {/* Image Slot */}
          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-3xl group">
            <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors duration-500 rounded-3xl"></div>
            <img
              id="about-custom-image"
              src="/placeholder.svg"
              alt="Custom Image Slot"
              className="relative z-10 w-full h-full object-cover rounded-3xl border border-primary/20 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
