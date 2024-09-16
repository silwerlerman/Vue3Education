<template>
  <div class="input-block">
    <ElInput class="input-block__input" v-model.trim="text"></ElInput>
    <ElButton @click="addToDo(text)">Добавить задачу</ElButton>
  </div>
  <ul class="list">
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <ElButton type="danger" round @click="removeTodo(todo)">X</ElButton>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElButton, ElInput } from 'element-plus';
import type { addToDoFunc, generateIdFunc, removeToDoFunc, toDo } from './types';

const text = ref<string>('');
const todos = ref<toDo[]>([
  { id: 1, text: 'Текст задачи1' },
  { id: 2, text: 'Текст задачи2' }
]);

const addToDo: addToDoFunc = inputText => {
  todos.value.push({ id: generateId(), text: inputText });
  text.value = '';
};

const removeTodo: removeToDoFunc = todo => {
  todos.value = todos.value.filter(t => t.id !== todo.id);
};

const generateId: generateIdFunc = () => {
  return todos.value.length ? Math.max(...todos.value.map(t => t.id)) + 1 : 1;
};
</script>

<style lang="scss" scoped>
.input-block,
.list {
  display: flex;
}

.input-block {
  gap: 15px;
  margin-bottom: 15px;

  &__input {
    max-width: 450px;
  }
}

.list {
  gap: 5px;
  padding-left: 17px;
  flex-direction: column;
}
</style>
