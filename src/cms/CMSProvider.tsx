import { ReactNode, useMemo } from 'react';
import { CMSContext, CMSContextValue } from './CMSContext';
import { getCMS } from './cms.client';

interface CMSProviderProps {
  children: ReactNode;
}

export const CMSProvider = ({ children }: CMSProviderProps) => {
  const value = useMemo<CMSContextValue>(
    () => ({
      getContent: <T,>(path: string) => getCMS<T>(path)
    }),
    []
  );

  return <CMSContext.Provider value={value}>{children}</CMSContext.Provider>;
};
