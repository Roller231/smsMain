export interface StatesStore {
  dialogs: Record<DialogNames, boolean>;

  loadings: Record<LoadingNames, boolean>;

  tab: TabNames;

  drawer: boolean;
  favorites: boolean;

  notifyValue: {
    state: boolean;
    message: string;
  };
}

export type DialogNames =
  | 'order'
  | 'orders_view'
  | 'replenish'
  | 'repeat_order';

export type LoadingNames = 'init' | 'error';

export type TabNames = 'service';
