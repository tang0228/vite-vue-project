<script setup>
import showDialog from "./components/showDialog"
import { reactive } from "vue"

const toggle = () => {
  const close = showDialog('asdsada', () => {
    close()
  })
}

let obj = reactive({
  a: {
    b: 1
  }
})

const changeData = () => {
  obj.a.b = 2
}
</script>

<template>
  <button @click="toggle">显示</button>
  <div>{{ obj.a.b }}</div>
  <button @click="changeData">改变数据</button>
</template>

<style scoped></style>
