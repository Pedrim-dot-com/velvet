import { useContext } from 'react';
import { CMSContext } from '../CMSContext';
import { UseCMSResult } from './useCMS.types';

export const useCMS = (): UseCMSResult => {
  const context = useContext(CMSContext);

  if (!context) {
    throw new Error('useCMS must be used within CMSProvider');
  }

  return context;
};
