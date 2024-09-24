<template>
  <div class="parent">
    <p>Родительский компонент</p>
    <p>Из дочернего пришло сообщение:</p>
    <p class="message">{{ text }}</p>
    <ChildComponent class="parent-item child" @response="handleResponse">
      <ElButton @click="handleClick">Отправить сообщение родительскому компоненту</ElButton>
    </ChildComponent>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElButton } from 'element-plus';
import ChildComponent from './ChildComponent.vue';
import type { handleMessageFunc } from './types';
import type { voidFunc } from '@/generalTypes/toDoListTypes';

const text = ref<string>('Пустое сообщение');

const counter = ref<number>(0);

const handleResponse: handleMessageFunc = message => {
  text.value = message;
};

const handleClick: voidFunc = () => {
  counter.value++;
  text.value = `Приветствие из дочернего компонента ${counter.value}`;
};
</script>

<style lang="scss" scoped>
.parent,
.parent > p {
  background: red !important;
}

.parent {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;

  &-item {
    &.child {
      margin-top: 15px;
    }
  }
}

.message {
  border: 1px solid black;
}
</style>
