import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FooterProps } from './Footer.types';

const Footer = ({ content }: FooterProps) => {
  const footerContent = content;

  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-20">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold-400 text-sm tracking-[0.3em] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              {footerContent.brand.name}
            </h2>

            <p className="text-text-secondary text-sm max-w-xs leading-relaxed">{footerContent.brand.description}</p>
          </motion.div>

          {/* LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 text-sm"
          >
            <p className="text-white/60 mb-4 tracking-wide">{footerContent.navigation.title}</p>

            {footerContent.navigation.links.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-text-secondary hover:text-white transition cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>

          {/* NEWSLETTER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 mb-4 tracking-wide">{footerContent.newsletter.title}</p>

            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <input
                placeholder={footerContent.newsletter.placeholder}
                className="bg-transparent outline-none text-sm flex-1 placeholder:text-white/40"
              />
              <button className="text-xs tracking-widest text-gold-400 hover:opacity-80 transition">
                {footerContent.newsletter.cta}
              </button>
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 mb-6 h-px bg-white/5" />

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40"
        >
          <p>{footerContent.bottom.copyright}</p>

          <div className="flex gap-6">
            <a className="hover:text-white transition">{footerContent.bottom.links.instagram}</a>
            <a className="hover:text-white transition">{footerContent.bottom.links.contact}</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
