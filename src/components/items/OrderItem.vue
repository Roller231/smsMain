<template>
  <q-item :style="{ height: elHeight + 'px' }">
    <q-item-section class="no-wrap">
      <div class="row no-wrap items-center">
        <div class="">
          <q-item-label caption v-if="minHeight">
            {{ lang.order }} №{{ item.id }}
          </q-item-label>

          <q-item-label
            class="row no-wrap items-center q-gutter-x-sm"
            v-if="minHeight">
            <ImageCountry />

            <div class="">{{ country }}</div>
          </q-item-label>

          <q-item-label class="row no-wrap items-center q-gutter-x-sm">
            <div class="">
              <ImageService />
            </div>

            <div class="">{{ service }}</div>
          </q-item-label>
        </div>

        <q-space></q-space>

        <q-badge
          class="q-pa-sm rounded-10 ellipsis"
          color="orange-7"
          text-color="white">
          <div class="ellipsis">
            {{ lang.order_status_text[item.status] }}
          </div>
        </q-badge>
      </div>

      <div class="row no-wrap q-gutter-x-sm q-pt-sm">
        <q-btn
          dense
          no-caps
          unelevated
          class="rounded-10 col"
          color="primary"
          label="Повторить"
          @click="openRepeat" />

        <q-btn
          dense
          unelevated
          no-caps
          class="rounded-10 col"
          color="primary"
          :label="lang.details"
          :loading="loading"
          @click="openOrder" />
      </div>
    </q-item-section>
  </q-item>
</template>

<script lang="ts" setup>
import config from 'src/config';
import { computed, ref } from 'vue';
import { defaultOrder } from 'stores/content/defaults';

import { useQuasar } from 'quasar';

import { useDataStore } from 'stores/data/dataStore';
import { useLang } from 'src/utils/use/useLang';

import { findCountryName, findServiceName } from 'src/utils/names/find';
import { CountryImage, ServiceImage } from 'src/utils/images';

import { fetchSMS } from 'boot/queries';
import { useStatesStore } from 'stores/states/statesStore';

const props = withDefaults(defineProps<OrderItemProps>(), {
  item: () => defaultOrder,
});

const quasar = useQuasar();
const data = useDataStore();
const states = useStatesStore();
const lang = computed(() => useLang());

const loading = ref(false);

const elHeight = computed(() => quasar.screen.height / 4.3);
const minHeight = computed(() => quasar.screen.height > 550);

const country = computed(() => findCountryName(props.item.country));
const service = computed(() => findServiceName(props.item.service));

const openOrder = () => {
  loading.value = true;

  fetchSMS(
    'getOrder',
    {
      order_id: props.item?.id ?? 0,
      user_id: data.user?.id ?? 0,
      public_key: config.public_key,
      user_secret_key: data.systemUser.secret_user_key,
    },
    true
  ).then(() => (loading.value = false));
};

const openRepeat = () => {
  data.orders.repeat = props.item;

  states.openDialog('repeat_order');
};

const ImageCountry = () => CountryImage(props.item.country);
const ImageService = () => ServiceImage(props.item.service, true);

interface OrderItemProps {
  item: SMSOrder;
}
</script>

<style lang="scss" scoped></style>
