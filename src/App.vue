<template>
    <div id="app">
        <div id="nav">
            <ul>
                <li>
                    <router-link to="/form">具有数据校验功能的表单组件——Form</router-link>
                </li>
                <li>
                    <router-link to="/checkbox">组合多选框组件——CheckboxGroup & Checkbox</router-link>
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
