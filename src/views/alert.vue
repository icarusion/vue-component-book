<template>
    <div>
        <h3>实战 4：全局通知组件 —— $Alert</h3>

        <button @click="handleOpen">打开提示</button>
    </div>
</template>
<script>
    export default {
        methods: {
            handleOpen () {
                this.$Alert.info('提示信息');
            }
        }
    }
</script>