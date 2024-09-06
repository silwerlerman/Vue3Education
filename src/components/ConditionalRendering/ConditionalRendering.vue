<template>
  <ElButton @click="toggle">Переключить</ElButton>
  <p v-if="show" class="text-block--bold">Утвердительно</p>
  <p v-else class="text-block--bold">Отрицательно</p>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus';
import { ref } from 'vue';
import type { ToggleVoidFunction } from './types';

const show = ref<Boolean>(true);

const toggle: ToggleVoidFunction = () => {
  show.value = !show.value;
};
</script>

<style lang="scss" scoped>
.text-block--bold:last-child {
  margin-top: 16px;
}
</style>
