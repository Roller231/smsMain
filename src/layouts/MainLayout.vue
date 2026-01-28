<template>
  <q-layout view="lHh lpR lFf">
    <q-inner-loading
      :showing="states.loadings.init || states.loadings.error"
      transition-show="none"
      transition-hide="fade"
      class="z-max bg-page"
      style="position: fixed">
      <q-spinner-facebook size="80px" color="primary" />
    </q-inner-loading>

    <q-header class="bg-page" bordered>
      <q-toolbar class="justify-between">
        <q-btn
          flat
          no-caps
          class="rounded-10 q-mr-sm"
          icon="menu"
          color="primary"
          @click="states.toggleDrawer">
          <q-badge
            v-if="data.activeOrders.length > 0"
            align="middle"
            rounded
            floating
            color="orange"
            text-color="white" />
        </q-btn>

        <q-btn
          flat
          no-caps
          class="rounded-10"
          :icon="mdiStar"
          color="orange"
          @click="states.toggleFavorites">
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="states.drawer" side="left" behavior="mobile" bordered>
      <drawer-template></drawer-template>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <favorites-template></favorites-template>

    <order-view></order-view>

    <order-dialog></order-dialog>

    <repeat-order></repeat-order>
  </q-layout>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue';

import { useStatesStore } from 'stores/states/statesStore';
import { useDataStore } from 'stores/data/dataStore';

import OrderView from 'components/order/OrderView.vue';
import OrderDialog from 'components/order/OrderDialog.vue';
import DrawerTemplate from 'layouts/DrawerTemplate.vue';
import RepeatOrder from 'components/order/RepeatOrder.vue';
import FavoritesTemplate from 'components/favorites/FavoritesTemplate.vue';
import { mdiStar } from '@quasar/extras/mdi-v7';

const states = useStatesStore();
const data = useDataStore();

const country = computed(() => data.selectedService ?? {});

const clickOutside = (e: any) => {
  if (
    Array.from(e?.target?.offsetParent?.classList ?? [])?.indexOf(
      'country-item'
    ) === -1 &&
    Array.from(e?.target?.classList)?.indexOf('country-item') === -1
  ) {
    data.services.selectedValue = null;
  }
};

watch(country, (val) => {
  if (val.toString() !== '{}')
    document.addEventListener('click', clickOutside, false);
  else document.removeEventListener('click', clickOutside, false);
});
</script>
