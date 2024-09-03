<template>
  <h1 :class="colorClass">Данный текст красный из-за привязки атрибута</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const colorClass = ref<string>('red');
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
</style>
