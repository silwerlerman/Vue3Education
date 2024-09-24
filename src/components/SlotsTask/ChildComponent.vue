<template>
  <div class="block">
    <p>Дочерний компонент</p>
    <slot @click="handleClick"></slot>
  </div>
</template>

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
