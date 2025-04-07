<script setup>
import showDialog from "./components/showDialog"

const toggle = () => {
  const close = showDialog('asdsada', () => {
    close()
  })
}
</script>

<template>
  <button @click="toggle">显示</button>
</template>

<style scoped></style>
