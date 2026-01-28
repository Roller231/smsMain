export interface DataStore {
  userValue: SMSUser;
  systemUserValue: SystemUser;

  services: {
    value: SMSServices[];

    selectedValue: SMSServices | null;
  };

  countries: {
    value: SMSCountry[];

    selectedValue: SMSCountry | null;
  };

  orders: {
    value: SMSOrder[];

    selectedOrder: SMSOrder;

    repeat: SMSOrder;
  };

  favorites: Array<SMSFavorite>;
  isSaved: boolean;

  search: Record<SearchNames, string>;
  price: Record<PriceNames, boolean>;
}

export type PriceNames = 'services';

export type SearchNames = 'services' | 'countries';
