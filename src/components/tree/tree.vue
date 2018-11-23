<template>
    <div>
        <tree-node
            v-for="(item, index) in data"
            :key="index"
            :data="item"
            :show-checkbox="showCheckbox"
        ></tree-node>
    </div>
</template>
<script>
    import TreeNode from './node.vue';

    export default {
        name: 'Tree',
        components: { TreeNode },
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            showCheckbox: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            initData (data) {
                data.forEach(item => {
                    if (!('expand' in item)) {
                        item.expand = false;
                    }
                    if (!('checked' in item)) {
                        item.checked = false;
                    }
                });

                if (data.children && data.children.length) {
                    data.children = this.initData(this.children);
                }
                return data;
            },
            updateTreeUp () {

            },
            updateTreeDown (data, checked) {
                this.$set(data, 'checked', checked);

                if (data.children && data.children.length) {
                    data.children.forEach(item => {
                        this.updateTreeDown(item, checked);
                    });
                }
            }
        },
        mounted () {
            this.data = this.initData(this.data);
        }
    }
</script>