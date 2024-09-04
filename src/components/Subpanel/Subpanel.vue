<template>
  <el-tabs v-model="activeName" type="border-card" class="tabs">
    <el-tab-pane label="Начало работы" name="first">
      <h1>Привет мир!</h1>
    </el-tab-pane>
    <el-tab-pane label="Декларативный рендеринг" name="second">
      <DeclarativeRendering />
    </el-tab-pane>
    <el-tab-pane label="Связывание атрибутов" name="third">
      <AttributeBindings />
    </el-tab-pane>
    <el-tab-pane label="Слушатели событий" name="forth">
      <EventListeners />
    </el-tab-pane>
    <el-tab-pane label="Привязки форм" name="fifth">
      <FormBindings />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DeclarativeRendering from '@/components/DeclarativeRendering/DeclarativeRendering.vue';
import AttributeBindings from '@/components/AttributeBindings/AttributeBindings.vue';
import EventListeners from '@/components/Event Listeners/Event Listeners.vue';
import FormBindings from '@/components/FormBindings/FormBindings.vue';

const activeName = ref('first');
</script>

<style lang="scss" scoped>
.tabs {
  margin: 25px;
  border-radius: 4px;
  border: 2px solid grey;
  --el-color-primary: black;

  & :deep(.el-tabs__item) {
    font-weight: bold;
  }

  & :deep(.el-tabs__content),
  & :deep(.el-tab-pane) {
    background: white;
  }

  & :deep(.el-tab-pane) {
    * {
      &:not(.el-button) {
        background: white;
      }

      &.el-button > span {
        background: transparent;
      }
    }
  }
}
</style>
