<template>
  <div class="input-block">
    <ElInput class="input-block__input" v-model.trim="text"></ElInput>
    <ElButton @click="addToDo(text)">Добавить задачу</ElButton>
    <ElButton @click="toggleHideCompleted">{{ showCompletedButtonText }}</ElButton>
  </div>
  <ul class="list">
    <li v-for="todo in todos" :key="todo.id" v-show="(!showCompleted && todo.done) || !todo.done">
      <div class="list-item">
        <input type="checkbox" v-model="todo.done" />
        <p :class="{ done: todo.done }">{{ todo.text }}</p>
        <ElButton type="danger" round @click="removeTodo(todo)">X</ElButton>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { ElButton, ElInput } from 'element-plus';
import type {
  addToDoFunc,
  generateIdFunc,
  removeToDoFunc,
  voidFunc
} from '@genTypes/toDoListTypes';
import type { toDo } from './types';

const text = ref<string>('');
const todos = ref<toDo[]>([
  { id: 1, text: 'Текст задачи1', done: true },
  { id: 2, text: 'Текст задачи2', done: false }
]);

const showCompleted = ref<boolean>(false);
const showCompletedButtonText = computed(() => {
  return !showCompleted.value ? 'Скрыть выполненные' : 'Показать выполненные';
});

const addToDo: addToDoFunc = inputText => {
  todos.value.push({ id: generateId(), text: inputText, done: false });
  text.value = '';
};

const removeTodo: removeToDoFunc<toDo> = todo => {
  todos.value = todos.value.filter(t => t.id !== todo.id);
};

const generateId: generateIdFunc = () => {
  return todos.value.length ? Math.max(...todos.value.map(t => t.id)) + 1 : 1;
};

const toggleHideCompleted: voidFunc = () => {
  showCompleted.value = !showCompleted.value;
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

  &-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}

.done {
  text-decoration: line-through;
}

.hide {
  display: none;
}
</style>
