<template>
    <ul>
        <li>
            <span>{{ data.title }}</span>
            <tree-node
                v-if="data.expand"
                v-for="(item, index) in data.children"
                :key="index"
                :data="item">
            </tree-node>
        </li>
    </ul>
</template>
<script>
    export default {
        name: 'TreeNode',
        props: {
            data: {
                type: Object,
                default () {
                    return {};
                }
            },
        }
    }
</script>