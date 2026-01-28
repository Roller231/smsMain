<template>
  <q-dialog
    maximized
    transition-hide="slide-right"
    transition-show="slide-left"
    transition-duration="150"
    v-model="states.favorites"
    @hide="deleteDeleted">
    <q-card>
      <q-card-section class="row justify-between items-center no-wrap">
        <div class="text-h6 text-weight-bold">
          {{ lang.favorites }}
        </div>

        <q-btn
          unelevated
          class="rounded-10"
          size="md"
          color="primary"
          icon="close"
          v-close-popup />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div
          class="rounded-10 q-pa-md q-py-xl text-center bg-item"
          v-if="!data.favorites.length">
          {{ lang.no_favorites }}
        </div>

        <pagination-list
          v-else
          search=""
          stable-height
          :current-items="data.favorites"
          :el-height="elHeight"
          :searching="false"
          :visible-items="3">
          <template v-slot="{ item }">
            <favorite-item
              :item="item"
              :deleted="deleted"
              @delete="updateDeleted"></favorite-item>
          </template>
        </pagination-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { useQuasar } from 'quasar';
import { useLang } from 'src/utils/use/useLang';

import { useStatesStore } from 'stores/states/statesStore';
import { useDataStore } from 'stores/data/dataStore';

import PaginationList from 'components/other/PaginationList.vue';
import FavoriteItem from 'components/favorites/FavoriteItem.vue';

const states = useStatesStore();
const data = useDataStore();
const quasar = useQuasar();
const lang = computed(() => useLang());

const deleted = ref<Array<SMSFavorite>>([]);

const elHeight = computed(() => quasar.screen.height / 4.3);

const updateDeleted = (favorite: SMSFavorite) => {
  const isFav = data.favorites.find(
    (fav) =>
      fav.country.org_id === favorite.country.org_id &&
      fav.service.name === favorite.service.name
  );

  if (isFav) {
    deleted.value.push(favorite);

    return;
  }

  deleted.value = deleted.value.filter(
    (del) =>
      del.country.org_id !== favorite.country.org_id ||
      del.service.name !== favorite.service.name
  );
};

const deleteDeleted = () => {
  deleted.value.forEach((del) => data.deleteFavorite(del.country, del.service));

  deleted.value = [];
};
</script>

<style scoped lang="scss"></style>
