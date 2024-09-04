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
import type { ReactiveRefString, ReactiveText } from './types';

const refText = ref<ReactiveRefString>('Reactive Ref Text!');

const reactiveText: ReactiveText = reactive({ text: `'Reactive Text!'` });
</script>
