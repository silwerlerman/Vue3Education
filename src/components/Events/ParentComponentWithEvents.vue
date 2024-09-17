<template>
  <div class="parent">
    <p>Родительский компонент</p>
    <p>Из дочернего пришло сообщение:</p>
    <p class="message">{{ text }}</p>
    <ChildComponent class="parent-item child" @response="handleResponse" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';
import type { handleMessageFunc } from './types';

const text = ref<string>('Пустое сообщение');

const handleResponse: handleMessageFunc = message => {
  text.value = message;
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
