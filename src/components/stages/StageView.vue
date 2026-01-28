<template>
  <div class="q-gutter-y-md">
    <div
      class="q-gutter-y-sm relative-position"
      v-for="(stage, index) in stages"
      :key="index">
      <div class="text-weight-bold font-size-16">
        {{ index + 1 }}. {{ stage.label }}
      </div>

      <div class="text-caption" v-if="stage.caption">{{ stage.caption }}</div>

      <stage-item
        :search="stage.search"
        :list="stage.list"
        :selected="stage.selected"
        :condition="stage.condition"
        :text="stage.text"
        :item-component="stage.itemComponent"
        :selected-component="stage.selectedComponent"
        :price="stage.price"></stage-item>

      <q-inner-loading
        :showing="
          states.loadings.getCountries || states.loadings.getRentCountries
        "
        class="bg-page">
        <q-spinner size="50px" color="primary" />
      </q-inner-loading>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStatesStore } from 'stores/states/statesStore';
import StageItem from 'components/stages/StageItem.vue';

withDefaults(defineProps<StageViewProps>(), {
  stages: () => [],
});

const states = useStatesStore();

interface StageViewProps {
  stages: Stages[];
}
</script>

<style lang="scss" scoped></style>
