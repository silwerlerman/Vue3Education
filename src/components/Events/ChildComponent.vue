<template>
  <div class="block">
    <p>Дочерний компонент</p>
    <ElButton @click="handleClick">Отправить сообщение родительскому компоненту</ElButton>
  </div>
</template>

<script setup lang="ts">
import type { voidFunc } from '@/generalTypes/toDoListTypes';
import { ElButton } from 'element-plus';
import { ref } from 'vue';

const emit = defineEmits(['response']);

const counter = ref<number>(0);

const handleClick: voidFunc = () => {
  counter.value++;
  emit('response', `Приветствие из дочернего компонента ${counter.value}`);
};
</script>

<style lang="scss" scoped>
.block,
.block > p {
  background: green !important;
}

.block {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
}
</style>
