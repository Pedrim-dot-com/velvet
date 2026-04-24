import { useContext } from 'react';
import { CMSContext, CMSContextValue } from './CMSContext';

export const useCMS = (): CMSContextValue => {
  const context = useContext(CMSContext);

  if (!context) {
    throw new Error('useCMS must be used within CMSProvider');
  }

  return context;
};
