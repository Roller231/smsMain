<template>
  <div class="row justify-between no-wrap q-gutter-x-sm" v-if="condition">
    <q-input
      dense
      borderless
      class="rounded-10 q-px-md col-grow bg-item"
      :placeholder="lang.search"
      :model-value="input"
      @update:model-value="updateSearch">
      <template v-slot:append>
        <q-icon name="search" v-if="input === ''" />

        <q-icon
          v-else
          name="close"
          @click.stop.prevent="updateSearch('')"
          class="cursor-pointer" />
      </template>
    </q-input>

    <q-btn
      dense
      no-caps
      no-wrap
      padding="4px 8px"
      unelevated
      class="rounded-10"
      size="md"
      color="primary"
      icon-right="swap_vert"
      v-if="props.price"
      :label="lang.price"
      @click="data.usePrice(props.price)" />
  </div>

  <pagination-list v-if="condition" :search="input" :current-items="list">
    <template v-slot="{ item }">
      <component :is="itemComponent" :item="item"></component>
    </template>
  </pagination-list>

  <component
    v-if="condition === false && selectedComponent"
    :is="selectedComponent" />

  <div
    v-if="condition === false && text"
    class="row bg-item flex-center rounded-10 q-py-lg q-px-sm">
    <q-icon color="primary" name="info" size="32px" />

    <div class="q-pl-sm">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onUnmounted, ref } from 'vue';

import { useLang } from 'src/utils/use/useLang';
import { useDataStore } from 'stores/data/dataStore';

import PaginationList from 'components/other/PaginationList.vue';
import { PriceNames, SearchNames } from 'stores/data/models';

const props = withDefaults(defineProps<CountriesListProps>(), {
  search: 'services',
  price: undefined,
  condition: true,
  list: () => [],
  selected: () => null,
  text: '',
  selectedComponent: () => '',
  itemComponent: () => '',
});

const data = useDataStore();
const lang = computed(() => useLang());

const input = ref('');

const updateSearch = (value: string) => {
  input.value = value;
  data.modelValue(props.search, value);
};

onUnmounted(() => updateSearch(''));

interface CountriesListProps {
  search: SearchNames;
  list: Array<any>;
  selected: any | null;
  itemComponent: any;
  condition: boolean;
  text?: string;
  price?: PriceNames;
  selectedComponent?: any;
}
</script>

<style lang="scss" scoped></style>
