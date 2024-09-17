<template>
  <el-tabs v-model="activeName" type="border-card" class="tabs" tabPosition="left">
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
    <el-tab-pane label="Условный рендеринг" name="sixth">
      <ConditionalRendering />
    </el-tab-pane>
    <el-tab-pane label="Рендеринг списков" name="seventh">
      <ListRendering />
    </el-tab-pane>
    <el-tab-pane label="Вычисляемые свойства" name="eighth">
      <ComputedProperty />
    </el-tab-pane>
    <el-tab-pane label="Жизненный цикл и ссылки в шаблонах" name="ninth">
      <LifecycleAndTemplateRefs />
    </el-tab-pane>
    <el-tab-pane label="Наблюдатели" name="tenth">
      <Watchers />
    </el-tab-pane>
    <el-tab-pane label="Компоненты" name="eleventh">
      <ParentComponent />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DeclarativeRendering from '@/components/DeclarativeRendering/DeclarativeRendering.vue';
import AttributeBindings from '@/components/AttributeBindings/AttributeBindings.vue';
import EventListeners from '@/components/Event Listeners/Event Listeners.vue';
import FormBindings from '@/components/FormBindings/FormBindings.vue';
import ConditionalRendering from '@/components/ConditionalRendering/ConditionalRendering.vue';
import ListRendering from '@/components/ListRendering/ListRendering.vue';
import ComputedProperty from '@/components/ComputedProperty/ComputedProperty.vue';
import LifecycleAndTemplateRefs from '@/components/LifecycleAndTemplateRefs/LifecycleAndTemplateRefs.vue';
import Watchers from '@/components/Watchers/Watcherses.vue';
import ParentComponent from '@/components/Components/ParentComponent.vue';

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
