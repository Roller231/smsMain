import { computed, markRaw } from 'vue';

import { useLang } from 'src/utils/use/useLang';

import CountrySelected from 'components/selected/CountrySelected.vue';

import ServiceItem from 'components/items/ServiceItem.vue';
import CountryItem from 'components/items/CountryItem.vue';

import { useDataStore } from 'stores/data/dataStore';

export const serviceStages = computed((): Stages[] => [
  {
    label: useLang().select_country,
    search: 'countries',
    selected: useDataStore().countries.selectedValue,
    condition: useDataStore().countries.selectedValue === null,
    list: useDataStore().countriesValue,
    selectedComponent: markRaw(CountrySelected),
    itemComponent: markRaw(CountryItem),
  },
  {
    label: useLang().select_service,
    search: 'services',
    price: 'services',
    selected: useDataStore().services.selectedValue,
    condition: useDataStore().countries.selectedValue !== null,
    itemComponent: markRaw(ServiceItem),
    list: useDataStore().servicesValue,
    text: useLang().select_notify,
  },
]);
