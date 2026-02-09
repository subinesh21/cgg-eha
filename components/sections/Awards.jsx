import { motion } from 'framer-motion';
import { Award, Globe, Trophy } from 'lucide-react';

const awards = [
  {
    icon: Award,
    title: 'Top 10 sustainable Materials innovation',
    description: 'Recognized for innovative use of agricultural waste in creating sustainable biocomposite materials.',
    link: 'Read more',
  },
  {
    icon: Globe,
    title: 'Meaningful business 100',
    description: 'Selected as one of the top 100 businesses creating meaningful impact for people and planet.',
    link: 'Read more',
  },
  {
    icon: Trophy,
    title: 'Leadership in sustainability',
    description: 'Awarded for exceptional leadership in promoting sustainable practices in manufacturing.',
    link: 'Read more',
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

export default function Awards() {
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
            Awards & Recognition
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {awards.map((award) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.title}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 lg:p-8 text-center group hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-eco-bg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-eco-text mb-3">
                  {award.title}
                </h3>
                <p className="text-sm text-eco-muted mb-4">
                  {award.description}
                </p>
                <a
                  href="#"
                  className="text-sm text-primary hover:underline"
                >
                  {award.link}
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
