import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const quickLinks = [
  { name: 'Shop All', href: '#' },
  { name: 'Reseller Program', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'My Account', href: '#' },
  { name: 'Our Story', href: '#' },
  { name: 'Our Material', href: '#' },
  { name: 'FAQ', href: '#' },
];

const categories = [
  { name: 'Gardenware', href: '#' },
  { name: 'Drinkware', href: '#' },
  { name: 'Tableware', href: '#' },
  { name: 'Storage', href: '#' },
  { name: 'Petcare', href: '#' },
  { name: 'Gifting', href: '#' },
];

const products = [
  { name: 'Bowls', href: '#' },
  { name: 'Cups', href: '#' },
  { name: 'Kitchen Storage', href: '#' },
  { name: 'Mugs', href: '#' },
  { name: 'Plates', href: '#' },
  { name: 'Pet Bowls', href: '#' },
];

const planters = [
  { name: 'Planters Linea', href: '#' },
  { name: 'Planters Romano', href: '#' },
  { name: 'Planters Terrazo', href: '#' },
  { name: 'Planters Deco', href: '#' },
  { name: 'Planters Luna', href: '#' },
  { name: 'Planters Eco', href: '#' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-eco-footer">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {/* Logo & Contact */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="text-3xl font-heading font-bold text-primary mb-6">
              <span className="text-eco-text">e</span>ha
            </div>
            <div className="space-y-3">
              <a href="tel:+918123456789" className="flex items-center gap-2 text-sm text-eco-muted hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 81234 56789</span>
              </a>
              <a href="https://wa.me/918123456789" className="flex items-center gap-2 text-sm text-eco-muted hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:hello@eha.eco" className="flex items-center gap-2 text-sm text-eco-muted hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>hello@eha.eco</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-eco-muted hover:text-primary hover:bg-eco-bg transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-eco-text uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-eco-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Categories */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-eco-text uppercase mb-4">
              Top Categories
            </h4>
            <ul className="space-y-2">
              {categories.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-eco-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Products */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-eco-text uppercase mb-4">
              Top Products
            </h4>
            <ul className="space-y-2">
              {products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-eco-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Planters */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-eco-text uppercase mb-4">
              Planters
            </h4>
            <ul className="space-y-2">
              {planters.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-eco-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-eco-muted">
              <a href="#" className="hover:text-primary transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Shipping & Returns
              </a>
            </div>
            <p className="text-sm text-eco-muted text-center md:text-right">
              © {new Date().getFullYear()} eha.eco. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
