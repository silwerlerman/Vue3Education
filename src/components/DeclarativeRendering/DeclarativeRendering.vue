<template>
  <div class="text-block">
    <p>Этот текст реактивный через</p>
    <p class="text-block--bold text-block--red">ref:</p>
    <p class="text-block--bold">{{ refText }}</p>
  </div>
  <div class="text-block">
    <p>Этот текст реактивный через</p>
    <p class="text-block--bold text-block--red">reactive:</p>
    <p class="text-block--bold">{{ reactiveText.text }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const refText = ref<string | number>('Reactive Ref Text!');

interface ReactiveText {
  text: string | number;
}

const reactiveText: ReactiveText = reactive({ text: 'Reactive Text!' });
</script>

<style lang="scss" scoped>
.text-block {
  display: flex;
  gap: 4px;

  &--bold {
    font-weight: bold;
  }

  &--red {
    color: red;
  }

  &:not(:last-child) {
    padding-bottom: 16px;
  }
}
</style>
