<script setup>
import Dialog from './components/Dialog.vue';
import { ref } from 'vue';
let showDialog = ref(true);

const toggle = () => {
  showDialog.value = !showDialog.value
}

const handleCancel = () => {
  showDialog.value = false
}
</script>

<template>
  <Dialog :width="'500px'" :visible="showDialog" @cancel="handleCancel">
  </Dialog>
  <button @click="toggle">显示</button>
</template>

<style scoped></style>
