<template>
  <q-item class="rounded-10 bg-item">
    <q-item-section avatar>
      <q-btn
        flat
        round
        size="md"
        color="primary"
        icon="close"
        @click="data.services.selectedValue = null" />
    </q-item-section>

    <q-item-section avatar>
      <q-img
        class="rounded-10"
        :src="image"
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
        {{ data.selectedService?.longName }}
      </q-item-label>
    </q-item-section>

    <q-badge
      class="rounded-10"
      floating
      color="primary"
      text-color="white"
      :label="lang.selected_service" />
  </q-item>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useLang } from 'src/utils/use/useLang';

import { useDataStore } from 'stores/data/dataStore';

const data = useDataStore();
const lang = computed(() => useLang());

const image = computed(() =>
  data.selectedService?.name === 'be'
    ? '/megamarket.png'
    : data.selectedService?.image ?? ''
);
</script>

<style lang="scss" scoped></style>
