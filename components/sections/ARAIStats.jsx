import { motion } from 'framer-motion';
import { CloudOff, Recycle, Leaf, Droplets } from 'lucide-react';

const stats = [
  {
    icon: CloudOff,
    value: '1000',
    unit: 'tons',
    label: 'co2 reduced',
  },
  {
    icon: Recycle,
    value: '350',
    unit: 'tons',
    label: 'waste upcycled',
  },
  {
    icon: Leaf,
    value: '300',
    unit: 'tons',
    label: 'crop waste used',
  },
  {
    icon: Droplets,
    value: '400',
    unit: 'tons',
    label: 'less fossil plastic',
  },
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
      duration: 0.5,
    },
  },
};

export default function ARAIStats() {
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
            ARAI verified
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="mb-1">
                  <span className="text-3xl lg:text-4xl font-heading font-bold text-primary">
                    {stat.value}
                  </span>
                  <span className="text-lg text-eco-muted ml-1">{stat.unit}</span>
                </div>
                <p className="text-sm text-eco-muted">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
