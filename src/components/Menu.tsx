import burottaImg from '@/assets/burotta-main.jpg';
import rollsImg from '@/assets/chicken-roll.jpg';
import friesImg from '@/assets/loaded-fries.jpg';
import juicesImg from '@/assets/juices.jpg';
import coffeeImg from '@/assets/coffee.jpg';
import comboImg from '@/assets/combo.jpg';

interface MenuCategory {
  name: string;
  description: string;
  image: string;
}

const menuCategories: MenuCategory[] = [
  {
    name: 'Burotta',
    description: 'Chicken • Beef • Egg',
    image: burottaImg,
  },
  {
    name: 'Rolls',
    description: 'Crispy wrapped goodness',
    image: rollsImg,
  },
  {
    name: 'Loaded Fries',
    description: 'Cheesy, saucy, crunchy',
    image: friesImg,
  },
  {
    name: 'Fresh Juices',
    description: 'Refreshingly natural',
    image: juicesImg,
  },
  {
    name: 'Coffee & Tea',
    description: 'Rich brews & traditional chai',
    image: coffeeImg,
  },
  {
    name: 'Combos',
    description: 'Complete meal deals',
    image: comboImg,
  },
];

const MenuCard = ({ category, index }: { category: MenuCategory; index: number }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gradient-card hover-lift animate-fade-up opacity-0 stagger-${index + 1}`}
      style={{ animationFillMode: 'forwards' }}
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-display text-3xl md:text-4xl text-cream mb-2 group-hover:text-primary transition-colors duration-300">
          {category.name}
        </h3>
        <p className="font-sans text-sm text-cream-muted tracking-wide">
          {category.description}
        </p>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/20 to-transparent" />
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <section id="menu" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border border-primary rounded-full" />
        <div className="absolute bottom-40 right-20 w-60 h-60 border border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-primary mb-4">
            What We Serve
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-cream mb-4">
            Our <span className="text-gradient-orange">Menu</span>
          </h2>
          <p className="font-sans text-cream-muted text-lg max-w-xl mx-auto">
            Explore our categories of handcrafted delights, made fresh daily with premium halal ingredients
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuCategories.map((category, index) => (
            <MenuCard key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* Visit CTA */}
        <div className="text-center mt-16">
          <p className="font-sans text-cream-muted mb-6">
            Visit us to explore the complete menu
          </p>
          <a
            href="#visit"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-sans font-semibold uppercase tracking-wider rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Find Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
