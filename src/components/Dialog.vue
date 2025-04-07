<template>
    <div class="dialog" :style="{ 'width': width }">
        <div class="dialog-header">
            {{ title }}
        </div>
        <div class="dialog-content">
        </div>
        <div class="dialog-footer">
            <button @click="emits('handleCancel')">取消</button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    width: {
        type: [String, Number],
        default: '40%'
    },
    position: {
        type: String,
        default: 'center'
    },
    className: {
        type: String,
        default: ''
    }
})

const emits = defineEmits(['handleCancel'])

</script>

<style lang="less">
.dialog {

    .dialog-header,
    .dialog-content,
    .dialog-footer {
        width: 100%
    }


}
</style>