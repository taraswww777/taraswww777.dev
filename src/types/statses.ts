export enum STATUSES {
  secondary = 'secondary',
  success = 'success',
  warning = 'warning',
  info = 'info',
  danger = 'danger',
}

export const STATUSES_BG: Record<STATUSES, string> = {
  [STATUSES.secondary]: 'bg-secondary',
  [STATUSES.success]: 'bg-success',
  [STATUSES.warning]: 'bg-warning',
  [STATUSES.info]: 'bg-info',
  [STATUSES.danger]: 'bg-danger',
};


export const STATUSES_BORDER: Record<STATUSES, string> = {
  [STATUSES.secondary]: 'border-secondary',
  [STATUSES.success]: 'border-success',
  [STATUSES.warning]: 'border-warning',
  [STATUSES.info]: 'border-info',
  [STATUSES.danger]: 'border-danger',
};

