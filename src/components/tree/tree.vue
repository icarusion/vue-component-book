<template>
    <div>
        <tree-node
            v-for="(item, index) in data"
            :key="index"
            :data="item">
        </tree-node>
    </div>
</template>
<script>
    import TreeNode from './node.vue';

    export default {
        components: { TreeNode },
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
        }
    }
</script>