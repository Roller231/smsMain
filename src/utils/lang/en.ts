const status_text: Record<number | string, string> = {
  0: 'Cancellation of activation',
  1: 'Willingness to accept SMS',
  2: 'There are no available numbers',
  3: 'Waiting for a repeated SMS',
  4: 'Waiting for SMS',
  5: 'Waiting for code refinement',
  6: 'Activation confirmed',
  7: 'Got SMS',
  8: 'Cancellation of activation',
  9: 'Activation canceled',

  10: 'Activation successfully activated',
  11: 'There is no connection to the servers',
  12: 'The specified activation id does not exist',
  13: 'One of the parameters has an invalid value',
  14: 'Error when trying to transmit activation ID without forwarding, or completed/inactive activation',
  15: 'Invalid API access key',
  16: 'Incorrect action',
  17: 'The account is blocked',

  waitCode: 'Waiting for SMS',
  secondWaitCode: 'Waiting for a repeated SMS',
  cancel: 'Cancellation of activation',
  finish: 'Activation successfully activated',
};

const rent_status: Record<number, string> = {
  4: 'Waiting for SMS',
  9: 'Rent cancelled',
  10: 'The lease is approved',
};

const enScheme = {
  price: 'Price',
  cost: 'from',
  items: 'pcs',

  copied: 'Copied!',
  service: 'Service',
  multiService: 'Multiservice',
  profile: 'Profile',
  rent: 'Rent',
  rents: 'Rents',

  select_country: 'Select country',
  select_service: 'Select service',
  select_services: 'Select services',
  select_operator: 'Select operator',

  max_selecting: 'You can choose only 2 services',
  multi_success: 'Successfully activated:',

  adds: 'The web application was created in the service',
  adds_button: 'Create a bot! Click!',

  search: 'Search...',
  not_found: 'Nothing was found...',

  from: 'from',
  fromAt: 'from',
  prev: 'Prev',
  next: 'Next',
  arrangement: 'Arrangement',
  buy: 'Buy',
  cancel_notify:
    'You can cancel activation only after the 3rd minute of activation',

  rent_status: rent_status,
  success_rent_confirm: 'The lease has been successfully confirmed',
  success_rent_cancel: 'The lease has been successfully cancelled',
  success_rent_continue: 'The lease has been successfully extended',
  active_orders_rent: 'There are unfinished leases',
  active_orders_activations: 'There are unfinished activations',
  active_rent_activations: 'There are unfinished activations and leases',
  button_rent: 'Rent',
  rent_period: 'Rental period (hours)',
  rent_continue: 'Lease extension',
  active_rent: 'Active leases',
  date_end: 'Expires',
  prolong_rent: 'Extend the lease',
  prolong_price: 'Renewal price',
  rent_continue_prolong: 'Extension period (hours)',
  rent_confirm: 'Confirm the lease',
  rent_cancel: 'Cancel the lease',
  rent_cancel_warning:
    'You can cancel the rental only for the first 20 minutes after purchase. After 20 minutes, the money will NOT be returned.',

  no_favorites: "You don't have favorites yet",
  favorites: 'Favourites',

  selected_country: 'Selected country',
  selected_service: 'Selected service',

  select_notify: 'You need to select a service',
  select_notify_country: 'Select a country',

  balance: 'Balance',
  change_language: 'Change the language',
  activations: 'Activations',

  order: 'Order',
  create_order: 'Create order',
  activations_warning: 'There is an unfinished activation',
  activations_notify: 'Unfinished activations',
  rent_notify: 'Unfinished rents',
  no_activations: "You don't have any activations yet",
  no_rents: "You didn't use the rental",
  finish_activation: 'Finish activation',
  noBalance: 'There is not enough balance to create an dialogs!',

  order_time: 'Date',
  order_service: 'Service',
  order_country: 'Country',
  order_operator: 'Operator',
  order_price: 'Price',
  order_status: 'Status',

  order_notify_wait:
    'Insert the number into the service and send an SMS, then check the received code here!',

  order_phone: 'Phone number',
  order_remained: 'Remained',
  order_codes: 'Code from the SMS',

  order_status_text: status_text,

  button_repeat: 'Repeat SMS',
  button_confirm: 'Confirm activation',
  button_cancel: 'Cancel activation',
  button_report: 'Confirm readiness',
  button_order: 'Repeat order',
  repeat: 'Repeat',

  button_dismiss: 'Dismiss',
  button_open: 'Open',

  details: 'Details',

  cancel: 'Cancel',
  confirm: 'Confirm',

  errors: {
    undefined_message:
      'Unknown error, please contact the technical support of the service',
    connection: 'Check your internet connection or disable the VPN',
    titles: {
      sure: 'Attention',
      reload: 'Oops, something went wrong...',
      notify: 'Notification',
    },
  },
};

export default enScheme;
