import { motion } from 'framer-motion';
import hero from '../../assets/hero.png';

const Home = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${hero})`
        }}
      />

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gold-500 tracking-[0.2em] text-xs mb-4"
            >
              EXPERIÊNCIA. ORIGEM. EXCELÊNCIA.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Café é arte,
              <br />e nós elevamos.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-text-secondary mb-8 max-w-md"
            >
              Café premium para verdadeiros apreciadores.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-gold-500 text-brown-900 px-8 py-3 rounded-full hover:opacity-90 transition"
            >
              Descobrir coleção →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
