<template>
  <q-btn
    unelevated
    class="border-left-10 self-end absolute-right"
    size="md"
    color="primary"
    :icon="state ? 'check' : 'content_copy'"
    @click="copy" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { copyToClipboard } from 'quasar';

import { useNotify } from 'src/utils/use/useNotify';
import { useLang } from 'src/utils/use/useLang';

const props = withDefaults(defineProps<Props>(), {
  text: () => '',
});

const state = ref(false);

function handleCopyTextFromParagraph() {
  const body = document.querySelector('body');
  const area = document.createElement('textarea');
  body?.appendChild(area);

  area.value = props.text;
  area.select();
  document.execCommand('copy');

  body?.removeChild(area);
}

const copy = () => {
  state.value = true;
  const lang = useLang();

  navigator.clipboard.writeText(props.text);
  copyToClipboard(props.text);
  handleCopyTextFromParagraph();

  useNotify(lang.copied);
  setTimeout(() => (state.value = false), 2000);
};

interface Props {
  text: string;
}
</script>

<style lang="scss" scoped></style>
