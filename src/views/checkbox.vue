<template>
    <div>
        <h3>组合多选框组件——CheckboxGroup & Checkbox</h3>

        <i-checkbox v-model="single">单独选项</i-checkbox>

        <br>
        数据：{{ single }}

        <br><br>

        <i-checkbox-group v-model="multiple">
            <i-checkbox label="option1">选项 1</i-checkbox>
            <i-checkbox label="option2">选项 2</i-checkbox>
            <i-checkbox label="option3">选项 3</i-checkbox>
            <i-checkbox label="option4">选项 4</i-checkbox>
        </i-checkbox-group>

        <br>
        数据：{{ multiple }}
    </div>
</template>
<script>
    import iCheckboxGroup from '../components/checkbox/checkbox-group.vue';
    import iCheckbox from '../components/checkbox/checkbox.vue';

    export default {
        components: { iCheckboxGroup, iCheckbox },
        data () {
            return {
                single: false,
                multiple: ['option1']
            }
        }
    }
</script>