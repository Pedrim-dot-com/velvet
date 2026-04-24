import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import type { NavbarProps } from './Navbar.types';

const Navbar = ({ content }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const navLinks = content.navigation;
  const brand = content.brand;

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          sticky top-0 z-50
          backdrop-blur-xl
          bg-bg-primary/80
          border-b border-white/5
        "
      >
        <div
          className="
          max-w-7xl mx-auto
          px-6 sm:px-10 lg:px-16
          py-7
          flex items-center justify-between
        "
        >
          {/* LOGO */}
          <h1 className="text-gold-500 tracking-[0.2em] text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
            {brand}
          </h1>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-10 text-sm tracking-wide text-text-secondary">
            <a className="hover:text-white transition cursor-pointer">{navLinks.home}</a>
            <a className="hover:text-white transition cursor-pointer">{navLinks.shop}</a>
            <a className="hover:text-white transition cursor-pointer">{navLinks.about}</a>
          </nav>

          {/* MOBILE BUTTON */}
          <button onClick={() => setOpen(true)} className="md:hidden text-white">
            ☰
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              fixed inset-0 z-50
              bg-bg-primary
              flex items-center justify-center
            "
          >
            {/* CLOSE BUTTON */}
            <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-2xl">
              ✕
            </button>

            {/* MENU */}
            <motion.nav
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="
                flex flex-col gap-10
                text-2xl
                tracking-wide
              "
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <a onClick={() => setOpen(false)}>{navLinks.home}</a>
              <a onClick={() => setOpen(false)}>{navLinks.shop}</a>
              <a onClick={() => setOpen(false)}>{navLinks.about}</a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
