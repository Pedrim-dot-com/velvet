import { useEffect, useState } from 'react';
import { useCMS } from './useCMS';

export const RequestStatusType = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
} as const;

export type RequestStatusMap = typeof RequestStatusType;

export type CMSRequestState<T> =
  | { status: RequestStatusMap['IDLE'] }
  | { status: RequestStatusMap['LOADING'] }
  | { status: RequestStatusMap['SUCCESS']; data: T }
  | { status: RequestStatusMap['ERROR']; error: unknown };

export const useCMSContent = <T>(path: string): CMSRequestState<T> => {
  const { getContent } = useCMS();

  const [content, setContent] = useState<CMSRequestState<T>>({
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
