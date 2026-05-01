import { useEffect, useState } from 'react';
import { RequestState, RequestStatusType } from '../../types';
import { useCMS } from '../useCMS';

export const useCMSContent = <T>(path: string): RequestState<T> => {
  const { getContent } = useCMS();

  const [content, setContent] = useState<RequestState<T>>({
    status: RequestStatusType.IDLE
  });

  useEffect(() => {
    let isMounted = true;

    const fetchContent = async () => {
      setContent({ status: RequestStatusType.LOADING });

      try {
        const data = await getContent<T>(path);

        if (!isMounted) {
          return;
        }

        setContent({
          status: RequestStatusType.SUCCESS,
          data
        });
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setContent({
          status: RequestStatusType.ERROR,
          error
        });
      }
    };

    fetchContent();

    return () => {
      isMounted = false;
    };
  }, [getContent, path]);

  return content;
};
