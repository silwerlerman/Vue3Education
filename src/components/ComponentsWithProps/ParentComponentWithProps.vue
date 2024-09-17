<template>
  <div class="parent">
    <p>Родительский компонент</p>
    <ChildComponent class="parent-item child" :text="text" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const text = ref<string>('Внешний текст');
</script>

<style lang="scss" scoped>
.parent,
.parent > p {
  background: red !important;
}

.parent {
  padding: 15px;

  &-item {
    &.child {
      margin-top: 15px;
      background: green !important;
    }
  }
}
</style>
