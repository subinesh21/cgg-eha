import { motion } from 'framer-motion';
import { TrendingUp, Sparkles, Users, Shield } from 'lucide-react';
import { imgPath } from '@/lib/paths';


const values = [
  {
    icon: TrendingUp,
    title: 'Elevate',
    description: 'Elevate our lives by caring for the world',
  },
  {
    icon: Sparkles,
    title: 'Experience',
    description: 'Experience the new gold standard products',
  },
  {
    icon: Users,
    title: 'Engage',
    description: 'Engage with communities for their wellbeing',
  },
  {
    icon: Shield,
    title: 'Ensure',
    description: 'Ensure with transparency and trust',
  },
];

export default function HappinessSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-eco-text mb-4">
                <span className="text-primary">Happiness</span>
                <br />
                for everyone
              </h2>
              <p className="text-eco-muted leading-relaxed">
                Eha presents an opportunity for everyone to take little steps in protecting 
                your loved ones & the planet, resulting in a sense of fulfilment & happiness.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-eco-bg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-eco-text">
                      {value.title}
                    </h3>
                    <p className="text-sm text-eco-muted">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
              >
                SHOP NOW
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-eco-text font-medium rounded-md hover:border-primary hover:text-primary transition-colors"
              >
                READ MORE
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src={imgPath('/images/hero-slide-3.jpg')}
              alt="Sustainable products"
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}