<template>
  <el-tabs v-model="activeName" type="border-card" class="tabs">
    <el-tab-pane label="Начало работы" name="first">
      <h1>Привет мир!</h1>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeName = ref('first');
</script>

<style scoped lang="scss">
.tabs {
  margin: 25px;
  border-radius: 4px;
  border: 2px solid grey;
  --el-color-primary: black;

  & :deep(.el-tabs__item) {
    font-weight: bold;
  }

  & :deep(.el-tabs__content),
  & :deep(.el-tab-pane) > * {
    background: white;
  }
}
</style>
