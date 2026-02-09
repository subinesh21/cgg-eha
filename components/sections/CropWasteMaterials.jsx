import { motion } from 'framer-motion';
import { imgPath } from '@/lib/paths';


const materials = [
  {
    name: 'Rice Husk',
    description: 'Goodness of rice',
    image: '/images/material-rice.jpg',
  },
  {
    name: 'Coffee Husk',
    description: 'Fragrance of coffee',
    image: '/images/material-coffee.jpg',
  },
  {
    name: 'Bamboo fibre',
    description: 'Strength of bamboo',
    image: '/images/material-bamboo.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CropWasteMaterials() {
  return (
    <section className="py-16 lg:py-24 bg-eco-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-eco-text">
            Circular & sustainable products made with crop-waste
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {materials.map((material) => (
            <motion.div
              key={material.name}
              variants={itemVariants}
              className="group"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src={imgPath(material.image)}
                  alt={material.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-eco-text mb-1">
                {material.name}
              </h3>
              <p className="text-sm text-eco-muted">{material.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}