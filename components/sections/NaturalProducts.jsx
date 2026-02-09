import { motion } from 'framer-motion';
import { imgPath } from '@/lib/paths';


export default function NaturalProducts() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src={imgPath('/images/category-drinkware.jpg')}
              alt="Natural products"
              className="w-full h-48 lg:h-64 object-cover rounded-xl"
            />
            <img
              src={imgPath('/images/category-tableware.jpg')}
              alt="Eco-friendly collection"
              className="w-full h-48 lg:h-64 object-cover rounded-xl mt-8"
            />
            <img
              src={imgPath('/images/product-storage-jars.jpg')}
              alt="Sustainable storage"
              className="w-full h-48 lg:h-64 object-cover rounded-xl -mt-8"
            />
            <img
              src={imgPath('/images/product-planters.jpg')}
              alt="Eco planters"
              className="w-full h-48 lg:h-64 object-cover rounded-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-eco-text mb-2">
                Natural
              </h2>
              <h3 className="text-xl lg:text-2xl font-heading text-eco-muted">
                Feels as natural as it looks
              </h3>
            </div>

            <p className="text-eco-muted leading-relaxed">
              Our products are climate positive, safe for the environment, and designed 
              to enhance your lifestyle while protecting the planet. Made from natural 
              materials like rice husk, bamboo fiber, and coffee husk.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-eco-text">100% biodegradable materials</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-eco-text">Carbon negative production</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-eco-text">Safe for food contact</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-eco-text">Durable and long-lasting</span>
              </li>
            </ul>

            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
            >
              SHOP NOW
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}