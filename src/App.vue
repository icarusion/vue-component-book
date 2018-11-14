<template>
    <div id="app">
        <div id="nav">
            <ul>
                <li>
                    <router-link to="/form">具有数据校验功能的表单组件 —— Form</router-link>
                </li>
                <li>
                    <router-link to="/checkbox">组合多选框组件 —— CheckboxGroup & Checkbox</router-link>
                </li>
                <li>
                    <router-link to="/display">动态渲染 .vue 文件的组件 —— Display</router-link>
                </li>
                <li>
                    <router-link to="/alert">实战 4：全局通知组件 —— $Alert</router-link>
                </li>
                <li>
                    <router-link to="/table-render">实战 5：可用 Render 自定义列的表格组件 —— Table</router-link>
                </li>
            </ul>
        </div>
        <hr>
        <router-view/>
    </div>
</template>
<script>
    export default {

    }
</script>
