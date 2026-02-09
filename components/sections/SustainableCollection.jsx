import { motion } from 'framer-motion';
import { imgPath } from '@/lib/paths';


const collections = [
  { name: 'Drinkware', image: '/images/category-drinkware.jpg', href: '#' },
  { name: 'Tableware', image: '/images/category-tableware.jpg', href: '#' },
  { name: 'Gardenware', image: '/images/category-gardenware.jpg', href: '#' },
  { name: 'Petcare', image: '/images/product-pasta-bowls.jpg', href: '#' },
  { name: 'Gifting', image: '/images/blog-christmas.jpg', href: '#' },
  { name: 'Storage', image: '/images/category-storage.jpg', href: '#' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function SustainableCollection() {
  return (
    <section className="py-16 lg:py-24 bg-eco-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl lg:text-3xl font-heading font-semibold text-center text-eco-text mb-12"
        >
          Our Sustainable Collection
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6"
        >
          {collections.map((collection) => (
            <motion.a
              key={collection.name}
              href={collection.href}
              variants={itemVariants}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <img
                src={imgPath(collection.image)}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-heading font-semibold text-lg lg:text-xl">
                  {collection.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}