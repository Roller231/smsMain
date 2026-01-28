<template>
  <q-dialog
    v-model="states.dialogs.order"
    no-shake
    persistent
    position="bottom"
    transition-duration="150"
    @before-show="show"
    @hide="hide">
    <q-card style="width: 100%" class="q-gutter-y-md q-px-md q-pb-md">
      <div class="row items-center justify-between">
        <div class="font-size-16 text-weight-bold">
          {{ lang.order }} №{{ data.createdOrder.id }}
        </div>

        <q-btn
          unelevated
          class="rounded-10"
          size="md"
          color="primary"
          icon="close"
          v-close-popup />
      </div>

      <div>
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
      </div>

      <div class="">
        <div>
          {{ lang.order_phone }}
        </div>

        <q-list bordered separator class="rounded-10 overflow-hidden">
          <q-item
            style="max-height: 35px !important; min-height: 35px !important"
            class="relative-position bg-item">
            <q-item-section>
              <q-item-label class="text-center font-size-16 text-weight-bold">
                {{ data.createdOrder.phone }}
              </q-item-label>
            </q-item-section>

            <CopyButton :text="data.createdOrder?.phone ?? ''" />
          </q-item>
        </q-list>
      </div>

      <div class="">
        <order-code
          v-if="code"
          :item="code"
          class="rounded-10 overflow-hidden q-list--bordered"></order-code>

        <div
          v-if="!code && orderEnd === false"
          class="text-center rounded-10 q-pa-sm bg-item">
          <q-icon name="info" color="primary" size="32px" />

          <div>
            {{ lang.order_notify_wait }}
          </div>
        </div>
      </div>

      <div
        class="text-center font-size-16 text-weight-bold q-pa-md"
        v-if="orderEnd">
        {{ lang.order_status_text[status] }}
      </div>

      <div v-if="orderEnd === false">
        <div class="text-center text-caption">
          {{ lang.order_remained }} {{ timer.format }}
        </div>

        <q-linear-progress
          stripe
          rounded
          size="20px"
          :value="timer.percent"
          color="primary" />
      </div>

      <div class="row q-my-sm q-gutter-y-sm" v-if="orderEnd === false">
        <q-btn
          unelevated
          no-caps
          class="rounded-10 col-12"
          size="md"
          color="primary"
          :label="lang.button_repeat"
          :loading="loadings.second"
          v-if="code && status !== 3 && status !== 1 && status !== 5"
          @click="secondSms" />

        <q-btn
          unelevated
          no-caps
          class="rounded-10 col-12"
          size="md"
          color="red"
          v-if="!code"
          :label="lang.button_cancel"
          :loading="loadings.cancel"
          @click="cancelOrder" />

        <q-btn
          unelevated
          no-caps
          class="rounded-10 col-12"
          size="md"
          color="primary"
          v-if="code"
          :label="lang.button_confirm"
          :loading="loadings.confirm"
          @click="confirmOrder" />
      </div>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import config from 'src/config';
import { date } from 'quasar';
import { computed, ref } from 'vue';
import { findCountryName, findServiceName } from 'src/utils/names/find';
import { CountryImage, ServiceImage } from 'src/utils/images';
import { useNotify } from 'src/utils/use/useNotify';

import { useStatesStore } from 'stores/states/statesStore';
import { useDataStore } from 'stores/data/dataStore';
import { useTimer } from 'src/utils/helpers/timer';
import { useLang } from 'src/utils/use/useLang';

import { fetchSMS } from 'boot/queries';

import CopyButton from 'components/other/CopyButton.vue';
import OrderCode from 'components/other/OrderCode.vue';

const states = useStatesStore();
const data = useDataStore();
const timer = useTimer();
const lang = computed(() => useLang());

const loadings = ref({
  second: false,
  confirm: false,
  cancel: false,
});

const time = computed(() =>
  date.formatDate((data.createdOrder?.time ?? 0) * 1000, 'DD.MM.YYYY HH:mm')
);

const status = computed((): number | string => data.createdOrder?.status ?? 8);

const code = computed(() => data.createdOrder?.codes);

const country = computed(() => findCountryName(data.createdOrder?.country));
const service = computed(() => findServiceName(data.createdOrder?.service));

const orderEnd = computed(
  () =>
    [0, 6, 8, 9, 10, 'cancel', 'finish'].includes(status.value) || timer.isEnd
);

const secondSms = () => {
  if (loadings.value.second) return;
  loadings.value.second = true;

  fetchSMS('secondSms', {
    user_id: data.user.id,
    order_id: data.createdOrder?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUser.secret_user_key,
  }).then(() => {
    loadings.value.second = false;
  });
};

const cancelOrder = () => {
  if (!timer.cancel) {
    useNotify(lang.value.cancel_notify);

    return;
  }

  if (loadings.value.cancel) return;
  loadings.value.cancel = true;

  fetchSMS('closeOrder', {
    user_id: data.user.id,
    order_id: data.createdOrder?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUser.secret_user_key,
  }).then(() => {
    timer.stop();
    loadings.value.cancel = false;
  });
};

const confirmOrder = () => {
  if (loadings.value.confirm) return;
  loadings.value.confirm = true;

  fetchSMS('confirmOrder', {
    user_id: data.user.id,
    order_id: data.createdOrder?.id ?? 0,
    public_key: config.public_key,
    user_secret_key: data.systemUser.secret_user_key,
  }).then(() => {
    timer.stop();
    loadings.value.confirm = false;
  });
};

const show = () => {
  timer.start(
    () =>
      fetchSMS('getOrder', {
        user_id: data.user.id,
        user_secret_key: data.systemUser.secret_user_key,
        public_key: config.public_key,
        order_id: data.createdOrder?.id ?? 0,
      }),
    data.createdOrder?.time.toString() ?? '',
    config.time_to_order_end
  );
};

const hide = () => {
  timer.stop();

  fetchSMS('orders', {
    user_id: data.user.id,
    user_secret_key: data.systemUser.secret_user_key,
    public_key: config.public_key,
  });
};

const ImageCountry = () => CountryImage(data.createdOrder?.country);
const ImageService = () => ServiceImage(data.createdOrder?.service, true);

const order = computed(() => [
  {
    label: lang.value.order_time,
    value: time.value,
    image: '',
  },
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
    value: data.createdOrder?.cost.comma(),
    image: '',
  },
  {
    label: lang.value.order_status,
    value: lang.value.order_status_text[data.createdOrder?.status ?? 8],
    image: '',
  },
]);
</script>

<style lang="scss" scoped></style>
