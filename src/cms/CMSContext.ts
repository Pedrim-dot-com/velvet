import { createContext } from 'react';
import { getCMS } from './cms.client';

export interface CMSContextValue {
  getContent: typeof getCMS;
}

export const CMSContext = createContext<CMSContextValue | undefined>(undefined);
