import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: 'I recently purchased a set of coffee cups from Eha and I am extremely impressed with the quality and design. The cups are not only visually appealing but also durable and eco-friendly. I love that they are made from sustainable materials.',
    products: ['Coffee Cups'],
    author: 'Priya Sharma',
    designation: 'Verified Buyer',
    rating: 5,
  },
  {
    id: 2,
    quote: 'The planters I ordered are absolutely beautiful! They look great in my balcony garden and I feel good knowing they are made from crop waste. The quality is excellent and they are very sturdy.',
    products: ['Planters'],
    author: 'Rahul Mehta',
    designation: 'Verified Buyer',
    rating: 5,
  },
  {
    id: 3,
    quote: 'Eha products are a game changer! I have been using their storage containers for months now and they are perfect. Love that they are unbreakable and safe for the environment.',
    products: ['Storage Containers'],
    author: 'Anita Patel',
    designation: 'Verified Buyer',
    rating: 5,
  },
  {
    id: 4,
    quote: 'The pasta bowls are amazing! They look so elegant on my dining table and the fact that they are eco-friendly makes me feel good about my purchase. Highly recommend!',
    products: ['Pasta Bowls'],
    author: 'Vikram Singh',
    designation: 'Verified Buyer',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-eco-text">
            What our customers say
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-eco-bg rounded-2xl p-8 lg:p-12"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-eco-text leading-relaxed mb-6">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>

              {/* Products */}
              <div className="flex flex-wrap gap-2 mb-6">
                {testimonials[currentIndex].products.map((product) => (
                  <span
                    key={product}
                    className="px-3 py-1 bg-white text-sm text-eco-muted rounded-full"
                  >
                    {product}
                  </span>
                ))}
              </div>

              {/* Author */}
              <div>
                <p className="font-heading font-semibold text-eco-text">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-sm text-eco-muted">
                  {testimonials[currentIndex].designation}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-eco-text hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-eco-text hover:border-primary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
