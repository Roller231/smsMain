<template>
  <q-item
    clickable
    @click="selectCountry"
    style="height: 52px"
    class="relative-position">
    <q-item-section avatar>
      <q-img
        class="rounded-10"
        :src="props.item.image"
        spinner-color="primary"
        style="height: 24px; width: 24px">
        <template v-slot:error>
          <q-img
            class="rounded-10"
            src="src/assets/default.png"
            spinner-color="primary"
            style="height: 24px; width: 10px" />
        </template>
      </q-img>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-subtitle1">
        {{ title }}
      </q-item-label>
    </q-item-section>

    <q-inner-loading :showing="loading" class="bg-page">
      <q-spinner size="36px" color="primary" />
    </q-inner-loading>
  </q-item>
</template>

<script lang="ts" setup>
import config from 'src/config';

import { computed, ref } from 'vue';
import { defaultCountry } from 'stores/content/defaults';
import { findCountryName } from 'src/utils/names/find';

import { useDataStore } from 'stores/data/dataStore';

import { fetchSMS } from 'boot/queries';
import { LocalStorage } from 'quasar';

const props = withDefaults(defineProps<Props>(), {
  item: () => defaultCountry,
});

const data = useDataStore();

const loading = ref(false);

const title = computed(() => findCountryName(props.item.org_id.toString()));

const selectCountry = () => {
  loading.value = true;
  LocalStorage.set('last-country', props.item.org_id);

  fetchSMS('services', {
    country: props.item.org_id.toString(),
    public_key: config.public_key,
  }).then(() => {
    loading.value = false;
    data.countries.selectedValue = props.item;

    data.search.countries = '';
    data.search.services = '';
  });
};

interface Props {
  item?: SMSCountry;
}
</script>

<style lang="scss" scoped></style>
