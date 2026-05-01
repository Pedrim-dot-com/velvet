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

  const handleSubmit = async (e: React.ChangeEvent) => {
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
      {/* LEFT - Branding */}
      <div className="hidden md:flex flex-col justify-center px-16 border-r border-border-soft">
        <h1 className="text-5xl font-heading text-gold-400 mb-6">{content.brandingTitle}</h1>

        <p className="text-text-secondary max-w-sm leading-relaxed">{content.brandingDescription}</p>
      </div>

      {/* RIGHT - Form */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-heading mb-10">{content.title}</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="text-xs text-text-muted">{content.emailLabel}</label>
              <input
                type="email"
                placeholder={content.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-border-soft focus:border-gold-400 outline-none py-2 text-(--color-text-primary)"
                required
              />
            </div>

            <div>
              <label className="text-xs text-text-muted">{content.passwordLabel}</label>
              <input
                type="password"
                placeholder={content.passwordPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-border-soft focus:border-gold-400 outline-none py-2 text-(--color-text-primary)"
                required
              />
            </div>

            {state.status === RequestStatusType.ERROR && (
              <p className="text-sm text-velvet-300">{String(state.error || content.authErrorMessage)}</p>
            )}

            <button
              type="submit"
              disabled={state.status === RequestStatusType.LOADING}
              className="mt-6 bg-(--color-accent) hover:bg-(--color-accent-hover) transition text-white py-3 text-sm tracking-widest"
            >
              {state.status === RequestStatusType.LOADING ? content.loadingSubmitLabel : content.submitLabel}
            </button>
          </form>

          <p className="mt-8 text-xs text-text-muted">
            {content.noAccountText}{' '}
            <Link to="/signup" className="underline text-gold-400">
              {content.createAccountText}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
