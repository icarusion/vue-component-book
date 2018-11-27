<template>
    <div>
        <tree-node
            v-for="(item, index) in cloneData"
            :key="index"
            :data="item"
            :show-checkbox="showCheckbox"
        ></tree-node>
    </div>
</template>
<script>
    import TreeNode from './node.vue';
    import { deepCopy } from '../../utils/assist.js';

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
        data () {
            return {
                cloneData: []
            }
        },
        methods: {
            rebuildData () {
                this.cloneData = deepCopy(this.data);
            },
            updateTreeDown (data, checked) {
                this.$set(data, 'checked', checked);

                if (data.children && data.children.length) {
                    data.children.forEach(item => {
                        this.updateTreeDown(item, checked);
                    });
                }
            },
            emitEvent (eventName, data) {
                this.$emit(eventName, data, this.cloneData);
            }
        },
        created () {
            this.rebuildData();
        },
        watch: {
            data () {
                this.rebuildData();
            }
        }
    }
</script>