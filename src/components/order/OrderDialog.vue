<template>
  <q-dialog
    v-model="states.dialogs.orders_view"
    maximized
    transition-hide="slide-right"
    transition-show="slide-left"
    transition-duration="150">
    <q-card>
      <q-card-section class="row justify-between items-center no-wrap">
        <div class="text-h6 text-weight-bold">
          {{ lang.activations }} {{ data.orders.value.length }}
        </div>

        <q-btn
          unelevated
          class="rounded-10"
          size="md"
          color="primary"
          icon="close"
          v-close-popup />
      </q-card-section>

      <q-card-section class="q-pt-none" v-if="data.activeOrders.length > 0">
        <q-banner class="bg-orange-7 justify-between text-white rounded-10">
          <div class="row justify-between items-center no-wrap">
            {{ lang.activations_notify }}:
            {{ data.activeOrders.length }}

            <q-icon :name="mdiOrderBoolAscending" color="white" size="32px" />
          </div>
        </q-banner>
      </q-card-section>

      <q-card-section class="q-pt-none justify-between">
        <div
          class="rounded-10 q-pa-md q-py-xl text-center bg-item"
          v-if="data.orders.value.length === 0">
          {{ lang.no_activations }}
        </div>

        <pagination-list
          v-else
          search=""
          stable-height
          :current-items="data.orders.value"
          :el-height="elHeight"
          :searching="false"
          :visible-items="3">
          <template v-slot="{ item }">
            <order-item :item="item"></order-item>
          </template>
        </pagination-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { useStatesStore } from 'stores/states/statesStore';
import { useDataStore } from 'stores/data/dataStore';

import PaginationList from 'components/other/PaginationList.vue';

import { useQuasar } from 'quasar';
import { useLang } from 'src/utils/use/useLang';
import OrderItem from 'components/items/OrderItem.vue';
import { mdiOrderBoolAscending } from '@quasar/extras/mdi-v7';

const states = useStatesStore();
const data = useDataStore();
const quasar = useQuasar();
const lang = computed(() => useLang());

const elHeight = computed(() => quasar.screen.height / 4.3);
</script>

<style lang="scss" scoped></style>
