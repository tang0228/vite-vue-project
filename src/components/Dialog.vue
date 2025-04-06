<template>
    <div class="dialog" :style="{ 'width': width }" v-if="visible">
        <div class="dialog-header">
        </div>
        <div class="dialog-content">
        </div>
        <div class="dialog-footer">
            <button @click="handleCancel">取消</button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    visible: Boolean,
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

const emits = defineEmits(['cancel'])

const handleCancel = () => {
    emits('calcel', false)
}

</script>

<style lang="less">
.dialog {
    // background-color: @blue;

    .dialog-header,
    .dialog-content,
    .dialog-footer {
        width: 100%
    } 


}
</style>