<template>
  <q-dialog
    v-model="states.dialogs.replenish"
    maximized
    transition-hide="slide-right"
    transition-show="slide-left"
    transition-duration="100">
    <q-card class="column justify-between">
      <q-card-section class="row justify-end items-center no-wrap">
        <q-btn
          unelevated
          class="rounded-10"
          size="md"
          color="primary"
          icon="close"
          v-close-popup />
      </q-card-section>

      <q-card-section>
        <div class="text-h6 text-center q-py-md">Введите сумму пополнения</div>

        <q-input
          v-model="amount"
          outlined
          class="replenish-input text-h6"
          mask="# ₽"
          fill-mask="0"
          maxlength="9"
          reverse-fill-mask />

        <div class="text-h6 text-center q-py-md">Выберите способ поплнения</div>

        <q-select
          outlined
          class="replenish-input text-h6"
          v-model="model"
          :options="options" />
      </q-card-section>

      <q-card-section class="row">
        <q-btn
          unelevated
          size="md"
          class="col rounded-10 q-py-md"
          color="primary"
          label="Пополнить " />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { useStatesStore } from 'stores/states/statesStore';
import { computed, ref } from 'vue';
import { useLang } from 'src/utils/use/useLang';

const states = useStatesStore();
const lang = computed(() => useLang());

const amount = ref('0');

const model = ref(null);
const options = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'];
</script>

<style lang="scss" scoped></style>
