<template>
  <q-page class="fit">
    <q-tab-panels v-model="states.tab" animated class="bg-transparent">
      <q-tab-panel
        :name="panel.name"
        v-for="(panel, index) in panels"
        :key="index">
        <stage-view :stages="panel.stages"></stage-view>
      </q-tab-panel>
    </q-tab-panels>

    <div class="q-pt-lg"></div>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { serviceStages } from 'components/stages';

import { useStatesStore } from 'stores/states/statesStore';

import StageView from 'components/stages/StageView.vue';

const states = useStatesStore();

const panels = computed((): Panels[] => [
  {
    name: 'service',
    stages: serviceStages.value,
  },
]);

interface Panels {
  name: string;
  stages: Stages[];
}
</script>
