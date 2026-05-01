import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCMSContent } from '../../cms';
import { LoginCMSContent } from '../../cms/types';
import useAuth from '../../features/auth';
import { RequestStatusType } from '../../types';

export default function Login() {
  const { login } = useAuth();
  const loginCMS = useCMSContent<LoginCMSContent>('login.json');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ email, password });
  };

  if (loginCMS.status === RequestStatusType.LOADING || loginCMS.status === RequestStatusType.IDLE) {
    return null;
  }

  if (loginCMS.status === RequestStatusType.ERROR) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <p className="text-red-400">Erro ao carregar conteúdo</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6">{loginCMS.data.title}</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder={loginCMS.data.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded"
            required
          />

          <input
            type="password"
            placeholder={loginCMS.data.passwordPlaceholder}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 rounded"
            required
          />

          <button type="submit" className="bg-black text-white p-3 rounded">
            {loginCMS.data.submitLabel}
          </button>
        </form>

        <p className="mt-4 text-sm">
          {loginCMS.data.noAccountText}
          <Link to="/signup" className="underline">
            {loginCMS.data.createAccountText}
          </Link>
        </p>
      </div>
    </div>
  );
}
