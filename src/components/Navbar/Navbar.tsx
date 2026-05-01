import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../features/auth';
import type { NavbarProps } from './Navbar.types';

const Navbar = ({ content }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const navLinks = user ? content.navigation.filter((item) => item.path !== '/login') : content.navigation;
  const brand = content.brand;
  const logoutLabel = content.logoutLabel;
  const authCtaClass =
    'px-4 py-2 rounded-full border border-gold-500/50 bg-gold-500/10 text-gold-500 hover:bg-gold-500 hover:text-brown-900 transition';

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate('/');
  };

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
          <Link to="/" className="text-gold-500 tracking-[0.2em] text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
            {brand}
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center justify-center gap-10 text-sm tracking-wide text-text-secondary">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  item.path === '/login'
                    ? authCtaClass
                    : `transition cursor-pointer ${isActive ? 'text-white' : 'hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {user ? (
              <button type="button" onClick={handleLogout} className={`${authCtaClass} cursor-pointer`}>
                {logoutLabel}
              </button>
            ) : null}
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
                flex flex-col items-center text-center gap-10
                text-2xl
                tracking-wide
              "
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={item.path === '/login' ? authCtaClass : undefined}
                >
                  {item.label}
                </NavLink>
              ))}

              {user ? (
                <button type="button" onClick={handleLogout} className={authCtaClass}>
                  {logoutLabel}
                </button>
              ) : null}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
