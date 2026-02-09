import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { imgPath } from '@/lib/paths';


const blogPosts = [
  {
    id: 1,
    title: 'Wrapped in Warmth This Season: A Christmas Romance',
    excerpt: 'Discover how to create a cozy, sustainable Christmas celebration with our eco-friendly products and tips for a greener holiday season.',
    image: '/images/blog-christmas.jpg',
    date: 'December 15, 2025',
    href: '#',
  },
  {
    id: 2,
    title: 'From Lights To Hot Cocoa: Christmas Vibes are Taking Over',
    excerpt: 'Get ready for the festive season with our guide to sustainable holiday decorations and thoughtful eco-friendly gifting ideas.',
    image: '/images/hero-slide-1.jpg',
    date: 'December 10, 2025',
    href: '#',
  },
  {
    id: 3,
    title: 'Holiday Rush Incoming: Preparing for Christmas (Like a Pro)',
    excerpt: 'Learn how to plan ahead for a stress-free Christmas with our sustainable product recommendations and organization tips.',
    image: '/images/category-storage.jpg',
    date: 'December 5, 2025',
    href: '#',
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

export default function BlogSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-eco-text">
            From Our Blog
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group"
            >
              <a href={post.href} className="block">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <img
                    src={imgPath(post.image)}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center gap-2 text-sm text-eco-muted mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-lg font-heading font-semibold text-eco-text mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-eco-muted mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center text-sm text-primary font-medium group-hover:underline">
                  Continue reading
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}