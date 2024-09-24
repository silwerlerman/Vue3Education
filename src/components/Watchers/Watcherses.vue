<template>
  <div class="block">
    <p>ID задачи: {{ todoId }}</p>
    <ElButton @click="todoId++" :disabled="!todoData" v-bind:loading="!todoData"
      >Получить новую задачу</ElButton
    >
    <pre v-if="todoData">{{ todoData }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { ElButton } from 'element-plus';
import type { toDo, asyncVoidFunc } from './types';

const todoId = ref<number>(1);
const todoData = ref<toDo>(null);

const fetchData = async (): asyncVoidFunc => {
  todoData.value = null;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
  try {
    todoData.value = await res.json();
  } catch (e) {
    throw new Error('Тип полученных данных не соответствует типу задачи');
  }
};

watch(todoId, fetchData);

fetchData();
</script>

<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 500px;
}
</style>
