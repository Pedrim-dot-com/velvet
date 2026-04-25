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
