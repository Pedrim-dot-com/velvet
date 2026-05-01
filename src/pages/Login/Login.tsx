import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCMSContent } from '../../cms';
import { LoginCMSContent } from '../../cms/types';
import useAuth from '../../features/auth';
import { RequestStatusType } from '../../types';

export default function LoginPage() {
  const { login, state } = useAuth();
  const loginCMS = useCMSContent<LoginCMSContent>('login.json');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ email, password });
  };

  if (loginCMS.status === RequestStatusType.IDLE || loginCMS.status === RequestStatusType.LOADING) {
    return null;
  }

  if (loginCMS.status === RequestStatusType.ERROR) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <p className="text-red-400">Erro ao carregar conteúdo</p>
      </div>
    );
  }

  const content = loginCMS.data;

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-(--color-bg-primary)">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" items-center hidden md:flex flex-col justify-center px-16 border-r border-border-soft"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-sm text-5xl font-heading text-gold-400 mb-6"
        >
          {content.brandingTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-text-secondary max-w-sm leading-relaxed"
        >
          {content.brandingDescription}
        </motion.p>
      </motion.div>

      {/* RIGHT - Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center px-6"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-sm"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl font-heading mb-10 text-gold-400 "
          >
            {content.title}
          </motion.h2>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div>
              <label>{content.emailLabel}</label>
              <input
                type="email"
                placeholder={content.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-border-soft focus:border-gold-400 outline-none py-2 text-text-secondary"
                required
              />
            </div>

            <div>
              <label>{content.passwordLabel}</label>
              <input
                type="password"
                placeholder={content.passwordPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-border-soft focus:border-gold-400 outline-none py-2 text-text-secondary"
                required
              />
            </div>

            {state.status === RequestStatusType.ERROR && (
              <p className="text-sm text-velvet-300">{String(state.error || content.authErrorMessage)}</p>
            )}

            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              type="submit"
              disabled={state.status === RequestStatusType.LOADING}
              className="mt-6 bg-(--color-accent) hover:bg-(--color-accent-hover) transition text-white py-3 text-sm tracking-widest cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            >
              {state.status === RequestStatusType.LOADING ? content.loadingSubmitLabel : content.submitLabel}
            </motion.button>
          </motion.form>

          <p className="mt-8 text-xs text-text-muted">
            {content.noAccountText}{' '}
            <Link to="/signup" className="underline text-gold-400">
              {content.createAccountText}
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
