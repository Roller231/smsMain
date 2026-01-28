<template>
  <q-dialog
    v-model="states.dialogs.repeat_order"
    no-shake
    persistent
    position="bottom"
    transition-duration="150">
    <q-card style="width: 100%" class="q-gutter-y-md q-px-md q-pb-md">
      <div class="row items-center justify-between">
        <div class="font-size-16 text-weight-bold">
          {{ lang.button_order }}
        </div>

        <q-btn
          unelevated
          class="rounded-10"
          size="md"
          color="primary"
          icon="close"
          v-close-popup />
      </div>

      <div class="row q-gutter-y-sm">
        <div
          class="row col-12 items-end"
          v-for="(item, index) in order"
          :key="index">
          <div>{{ item.label }}</div>

          <div class="col-grow q-mx-sm relative-position">
            <div class="order-dashed"></div>
          </div>

          <div class="row items-end q-gutter-x-sm">
            <ImageService v-if="item.image === 'service'" />

            <ImageCountry v-else-if="item.image === 'country'" />

            <div class="">{{ item.value }}</div>
          </div>
        </div>
      </div>

      <div class="row q-my-sm q-gutter-y-sm">
        <q-btn
          unelevated
          no-caps
          class="rounded-10 col-12"
          size="md"
          color="primary"
          :label="lang.button_order"
          :loading="loading"
          @click="repeatOrder" />
      </div>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

import { useStatesStore } from 'stores/states/statesStore';
import { useDataStore } from 'stores/data/dataStore';
import { useLang } from 'src/utils/use/useLang';

import { CountryImage, ServiceImage } from 'src/utils/images';
import { findCountryName, findServiceName } from 'src/utils/names/find';
import { fetchSMS } from 'boot/queries';
import config from 'src/config';

const states = useStatesStore();
const data = useDataStore();
const lang = computed(() => useLang());

const loading = ref(false);

const country = computed(() => findCountryName(data.repeat?.country));
const service = computed(() => findServiceName(data.repeat?.service));

const ImageCountry = () => CountryImage(data.repeat?.country);
const ImageService = () => ServiceImage(data.repeat?.service);

const repeatOrder = () => {
  loading.value = true;

  fetchSMS('createOrder', {
    service: data.orders.repeat.service,
    country: data.orders.repeat.country,
    user_id: data.user?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUserValue?.secret_user_key ?? '',
  }).then(() => {
    loading.value = false;
    states.closeDialog('repeat_order');
  });
};

const order = computed(() => [
  {
    label: lang.value.order_service,
    value: service.value,
    image: 'service',
  },
  {
    label: lang.value.order_country,
    value: country.value,
    image: 'country',
  },
  {
    label: lang.value.order_price,
    value: data.repeat?.cost?.toFixed(2) + ' ₽',
    image: '',
  },
]);
</script>

<style lang="scss" scoped></style>
