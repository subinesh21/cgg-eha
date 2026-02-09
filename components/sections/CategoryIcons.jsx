import { motion } from 'framer-motion';
import { Flower2, Coffee, UtensilsCrossed, Archive, Dog, Gift, Circle, CupSoda, CircleDot, GlassWater } from 'lucide-react';

const categories = [
  { name: 'Planter', icon: Flower2, href: '#' },
  { name: 'Drinkware', icon: Coffee, href: '#' },
  { name: 'Tableware', icon: UtensilsCrossed, href: '#' },
  { name: 'Storage', icon: Archive, href: '#' },
  { name: 'Pet Bowl', icon: Dog, href: '#' },
  { name: 'Gifting', icon: Gift, href: '#' },
  { name: 'Bowl', icon: Circle, href: '#' },
  { name: 'Cup', icon: CupSoda, href: '#' },
  { name: 'Plate', icon: CircleDot, href: '#' },
  { name: 'Mug', icon: GlassWater, href: '#' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function CategoryIcons() {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-start lg:justify-center gap-6 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.a
                key={category.name}
                href={category.href}
                variants={itemVariants}
                className="flex flex-col items-center gap-2 group flex-shrink-0"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-eco-bg group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs text-eco-muted group-hover:text-primary transition-colors whitespace-nowrap">
                  {category.name}
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
