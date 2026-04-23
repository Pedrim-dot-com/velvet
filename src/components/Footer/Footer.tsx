import { motion } from 'framer-motion';

const Footer = () => {
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
              VELVET CAFÉS
            </h2>

            <p className="text-text-secondary text-sm max-w-xs leading-relaxed">
              Café selecionado com torras excepcionais das melhores origens do mundo. Com sede no Porto, mas com
              curiosidade global.
            </p>
          </motion.div>

          {/* LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 text-sm"
          >
            <p className="text-white/60 mb-4 tracking-wide">Navigation</p>

            {['Home', 'Shop', 'About'].map((item) => (
              <a key={item} className="text-text-secondary hover:text-white transition cursor-pointer">
                {item}
              </a>
            ))}
          </motion.div>

          {/* NEWSLETTER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 mb-4 tracking-wide">Newsletter</p>

            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <input
                placeholder="Your email"
                className="bg-transparent outline-none text-sm flex-1 placeholder:text-white/40"
              />
              <button className="text-xs tracking-widest text-gold-400 hover:opacity-80 transition">JOIN →</button>
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
          <p>© {new Date().getFullYear()} Velvet Cafés. All rights reserved.</p>

          <div className="flex gap-6">
            <a className="hover:text-white transition">Instagram</a>
            <a className="hover:text-white transition">Contact</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
