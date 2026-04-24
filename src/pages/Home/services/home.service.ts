import { getCMS } from '../../../cms';
import { HomeCMSContent } from '../types';

export const getHomeContent = (): Promise<HomeCMSContent> => {
  return getCMS<HomeCMSContent>('home.json');
};
