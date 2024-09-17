<template>
  <div class="parent">
    <p>Родительский компонент</p>
    <ChildComponent class="parent-item child" />
  </div>
</template>

<script setup lang="ts">
import ChildComponent from './ChildComponent.vue';
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
