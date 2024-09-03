<template>
  <div class="text-block">
    <p class="text-block--bold">Счётчик:</p>
    <p class="text-block--bold text-block--red">{{ count }}</p>
  </div>
  <el-button type="success" round @click="increment">Увеличить</el-button>
  <el-button type="danger" round @click="decrement">Уменьшить</el-button>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus';
import { ref } from 'vue';
import type { MouseEventVoidFunction } from './types';

const count = ref<number>(0);

const increment: MouseEventVoidFunction = (e: MouseEvent) => {
  count.value++;
};

const decrement: MouseEventVoidFunction = (e: MouseEvent) => {
  count.value--;
};
</script>
