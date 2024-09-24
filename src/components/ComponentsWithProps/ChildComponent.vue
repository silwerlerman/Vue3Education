<template>
  <p>Дочерний компонент c текстом из родительского: {{ text }}</p>
</template>

<script setup lang="ts">
import type { childProps } from './types';

defineProps<childProps>();
</script>
