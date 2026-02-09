import { motion } from 'framer-motion';
import { Cloud, TrendingDown, TreePine } from 'lucide-react';
import { imgPath } from '@/lib/paths';

// Constants
const FEATURES = [
  { icon: Cloud, label: 'Climate', sublabel: 'Positive' },
  { icon: TrendingDown, label: 'Carbon', sublabel: 'Negative' },
  { icon: TreePine, label: 'Green', sublabel: 'Economy' },
];

const ANIMATION_CONFIG = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

// Main Component
export default function BiocompositesFeature() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Image */}
          <motion.div
            {...ANIMATION_CONFIG}
            className="relative"
          >
            <img
              src={imgPath('/images/hero-slide-2.jpg')}
              alt="Biocomposite products"
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Headings */}
            <div className="space-y-2">
              <p className="text-lg text-eco-muted">World&apos;s first brand</p>
              <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-eco-text">
                Enabling circular living with
              </h2>
              <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-primary">
                Biocomposites
              </h2>
            </div>

            {/* Description */}
            <p className="text-eco-muted leading-relaxed">
              Our proprietary biodur ® biocomposite materials transform waste into valuable 
              products using renewables and agricultural byproducts. They offer a low-carbon 
              alternative to traditional plastics, driving innovation and steering us towards 
              a circular, resilient future.
            </p>

            {/* Features Grid */}
            <div className="flex flex-wrap gap-6 py-4">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.label} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-eco-bg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-eco-text">{feature.label}</p>
                      <p className="text-sm text-primary">{feature.sublabel}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call-to-Action Buttons */}
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
        </div>
      </div>
    </section>
  );
}