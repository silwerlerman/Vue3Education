<template>
  <p ref="pElementRef">Hello</p>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const pElementRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (pElementRef.value) {
    pElementRef.value.textContent = 'Hello1';
  }
});
</script>
