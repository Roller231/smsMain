<template>
  <q-item :style="{ height: elHeight + 'px' }">
    <q-item-section class="no-wrap">
      <div class="row items-center no-wrap">
        <q-img
          class="rounded-10"
          :src="props.item.country?.image ?? ''"
          spinner-color="primary"
          style="height: 24px; width: 24px" />

        <div class="q-pl-sm">{{ countryTitle }}</div>
      </div>

      <div class="row items-center no-wrap">
        <q-img
          class="rounded-10"
          :src="props.item.service?.image ?? ''"
          spinner-color="primary"
          style="height: 24px; width: 24px" />

        <div class="q-pl-sm">{{ serviceTitle }}</div>
      </div>

      <q-btn
        dense
        no-caps
        unelevated
        class="rounded-10 q-mt-sm"
        size="md"
        color="primary"
        :label="lang.buy"
        :loading="loading"
        @click="createOrder" />
    </q-item-section>

    <q-item-section side>
      <q-btn
        flat
        no-caps
        class="rounded-10"
        :icon="isDeleted ? mdiStarOutline : mdiStar"
        color="orange"
        @click="emit('delete', props.item)">
      </q-btn>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import config from 'src/config';
import { computed, ref } from 'vue';

import { useLang } from 'src/utils/use/useLang';
import { useQuasar } from 'quasar';
import { useDataStore } from 'stores/data/dataStore';

import { findCountryName } from 'src/utils/names/find';
import { fetchSMS } from 'boot/queries';

import { products } from 'src/utils/names/products';
import { defaultFavorite } from 'stores/content/defaults';

import { mdiStar, mdiStarOutline } from '@quasar/extras/mdi-v7';

const props = withDefaults(defineProps<FavoriteItemProps>(), {
  item: () => defaultFavorite,
  deleted: () => [],
});

const emit = defineEmits<{
  (e: 'delete', value: SMSFavorite): void;
}>();

const quasar = useQuasar();
const data = useDataStore();
const lang = computed(() => useLang());

const loading = ref(false);

const elHeight = computed(() => quasar.screen.height / 4.3);

const countryTitle = computed(() =>
  findCountryName(props.item?.country.org_id + '')
);
const serviceTitle = computed(
  () => products[props.item.service.name] ?? props.item.service.name
);

const isDeleted = computed(() =>
  props.deleted.find(
    (item) =>
      item.service.name === props.item.service.name &&
      item.country.org_id === props.item.country.org_id
  )
);

const createOrder = () => {
  loading.value = true;

  fetchSMS('createOrder', {
    country: props.item.country.org_id + '',
    service: props.item.service?.name ?? '',
    user_id: data.user?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUserValue?.secret_user_key ?? '',
  }).then(() => {
    loading.value = false;

    data.search.countries = '';
    data.search.services = '';
  });
};

interface FavoriteItemProps {
  item: SMSFavorite;
  deleted: Array<SMSFavorite>;
}
</script>

<style scoped lang="scss"></style>
