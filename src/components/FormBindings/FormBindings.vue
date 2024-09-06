<template>
  <ElInput v-model.trim="text"></ElInput>
  <div class="text-block">
    <p>В инпуте сейчас содержиться текст:</p>
    <p class="text-block--bold text-block--red">{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ElInput } from 'element-plus';
import { ref } from 'vue';

const text = ref<string>('');
</script>

<style lang="scss" scoped>
.text-block {
  margin-top: 10px;
}
</style>
