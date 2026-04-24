import { useEffect, useState } from 'react';
import { getHomeContent } from '../../services';
import { HomeCMSContent } from '../../types';
import { BaseRequestStatus, RequestStatusType, UseHomeContentResult } from './useHomeContent.types';

export const useHomeContent = (): UseHomeContentResult => {
  const [homeCMS, setHomeCMS] = useState<BaseRequestStatus<HomeCMSContent>>({
    status: RequestStatusType.IDLE
  });

  useEffect(() => {
    const fetchData = async () => {
      setHomeCMS({ status: RequestStatusType.LOADING });

      try {
        const data = await getHomeContent();

        setHomeCMS({
          status: RequestStatusType.SUCCESS,
          data
        });
      } catch (error) {
        setHomeCMS({
          status: RequestStatusType.ERROR,
          error
        });
      }
    };

    fetchData();
  }, []);

  return {
    homeCMS: homeCMS
  };
};
