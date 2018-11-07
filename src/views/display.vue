<template>
    <div>
        <h3>动态渲染 .vue 文件的组件—— Display</h3>

        <display :code="code"></display>
    </div>
</template>
<script>
    import Display from '../components/display/display.vue';

    export default {
        components: { Display },
        data () {
            return {
                code: `
                <template>
                    <div>
                        <input v-model="message">
                        {{ message }}
                    </div>
                </template>
                <script>
                    export default {
                        data () {
                            return {
                                message: ''
                            }
                        }
                    }
                </script>
                `
            }
        }
    }
</script>