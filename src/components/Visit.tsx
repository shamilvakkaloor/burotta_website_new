import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const Visit = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Areekode, Malappuram',
      subContent: 'Kerala, India',
    },
    {
      icon: Phone,
      title: 'Call / WhatsApp',
      content: '+91 97451 19155',
      link: 'https://wa.me/919745119155',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Open Daily',
      subContent: '12:00 PM - 12:00 AM',
    },
  ];

  return (
    <section id="visit" className="section-padding bg-charcoal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Come Say Hello
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-cream mb-4">
            Visit <span className="text-gradient-orange">Us</span>
          </h2>
          <p className="font-sans text-cream-muted text-lg max-w-xl mx-auto">
            We'd love to serve you in person. Find us in the heart of Areekode.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className={`bg-gradient-card rounded-2xl p-6 border border-border/30 hover-lift animate-fade-up opacity-0 stagger-${index + 1}`}
                style={{ animationFillMode: 'forwards' }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-cream mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-lg text-cream-muted hover:text-primary transition-colors duration-300 flex items-center gap-2"
                      >
                        {info.content}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <>
                        <p className="font-sans text-lg text-cream-muted">{info.content}</p>
                        {info.subContent && (
                          <p className="font-sans text-sm text-muted-foreground">{info.subContent}</p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Directions Button */}
            <a
              href="https://maps.app.goo.gl/2K3vHCM4Ji3QByP27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold uppercase tracking-wider rounded-full hover:glow-orange transition-all duration-500 hover:scale-105 w-full justify-center mt-4"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>

          {/* Map Embed */}
          <div className="rounded-2xl overflow-hidden card-elevated h-[400px] lg:h-full min-h-[400px] animate-fade-up opacity-0 stagger-4" style={{ animationFillMode: 'forwards' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.9768844744986!2d76.05195841478565!3d11.146977992065393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6516b5f0e9b3d%3A0x2b3b3b3b3b3b3b3b!2sAreekode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BUROTTA Location - Areekode, Malappuram"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
