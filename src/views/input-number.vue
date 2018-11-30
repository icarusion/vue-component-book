<template>
    <InputNumber :value.sync="value" />
</template>
<script>
    import InputNumber from '../components/input-number/input-number.vue';

    export default {
        components: { InputNumber },
        data () {
            return {
                value: 1
            }
        }
    }
</script>