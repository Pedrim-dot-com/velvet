import { HomeCMSContent } from '../../types';

export enum RequestStatusType {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export type BaseRequestStatus<T> =
  | { status: RequestStatusType.IDLE }
  | { status: RequestStatusType.LOADING }
  | { status: RequestStatusType.SUCCESS; data: T }
  | { status: RequestStatusType.ERROR; error: unknown };

export interface UseHomeContentResult {
  homeCMS: BaseRequestStatus<HomeCMSContent>;
}
