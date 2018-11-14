<template>
    <div>
        <h3>实战 5：可用 Render 自定义列的表格组件 —— Table</h3>

        <table-render :columns="columns" :data="data"></table-render>
    </div>
</template>
<script>
    import TableRender from '../components/table-render/table.vue';

    export default {
        components: { TableRender },
        data () {
            return {
                columns: [
                    {
                        title: '姓名',
                        key: 'name',
                        render: (h, { row, index }) => {
                            let edit;

                            // 当前行为聚焦行时
                            if (this.editIndex === index) {
                                edit = [h('input', {
                                    domProps: {
                                        value: row.name
                                    },
                                    on: {
                                        input: (event) => {
                                            this.editName = event.target.value;
                                        }
                                    }
                                })];
                            } else {
                                edit = row.name;
                            }

                            return h('div', [
                                edit
                            ]);
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        render: (h, { row, index }) => {
                            let edit;

                            // 当前行为聚焦行时
                            if (this.editIndex === index) {
                                edit = [h('input', {
                                    domProps: {
                                        value: row.age
                                    },
                                    on: {
                                        input: (event) => {
                                            this.editAge = event.target.value;
                                        }
                                    }
                                })];
                            } else {
                                edit = row.age;
                            }

                            return h('div', [
                                edit
                            ]);
                        }
                    },
                    {
                        title: '出生日期',
                        render: (h, { row, index }) => {
                            let edit;

                            // 当前行为聚焦行时
                            if (this.editIndex === index) {
                                edit = [h('input', {
                                    domProps: {
                                        value: row.birthday
                                    },
                                    on: {
                                        input: (event) => {
                                            this.editBirthday = event.target.value;
                                        }
                                    }
                                })];
                            } else {
                                const date = new Date(parseInt(row.birthday));
                                const year = date.getFullYear();
                                const month = date.getMonth() + 1;
                                const day = date.getDate();

                                edit = `${year}-${month}-${day}`;
                            }

                            return h('div', [
                                edit
                            ]);
                        }
                    },
                    {
                        title: '地址',
                        key: 'address',
                        render: (h, { row, index }) => {
                            let edit;

                            // 当前行为聚焦行时
                            if (this.editIndex === index) {
                                edit = [h('input', {
                                    domProps: {
                                        value: row.address
                                    },
                                    on: {
                                        input: (event) => {
                                            this.editAddress = event.target.value;
                                        }
                                    }
                                })];
                            } else {
                                edit = row.address;
                            }

                            return h('div', [
                                edit
                            ]);
                        }
                    },
                    {
                        title: '操作',
                        render: (h, { row, index }) => {
                            if (this.editIndex === index) {
                                return [
                                    h('button', {
                                        on: {
                                            click: () => {
                                                this.data[index].name = this.editName;
                                                this.data[index].age = this.editAge;
                                                this.data[index].birthday = this.editBirthday;
                                                this.data[index].address = this.editAddress;
                                                this.editIndex = -1;
                                            }
                                        }
                                    }, '保存'),
                                    h('button', {
                                        style: {
                                            marginLeft: '6px'
                                        },
                                        on: {
                                            click: () => {
                                                this.editIndex = -1;
                                            }
                                        }
                                    }, '取消')
                                ];
                            } else {
                                return h('button', {
                                    on: {
                                        click: () => {
                                            this.editName = row.name;
                                            this.editAge = row.age;
                                            this.editAddress = row.address;
                                            this.editBirthday = row.birthday;
                                            this.editIndex = index;
                                        }
                                    }
                                }, '修改');
                            }
                        }
                    }
                ],
                data: [
                    {
                        name: '王小明',
                        age: 18,
                        birthday: '919526400000',
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        birthday: '696096000000',
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        birthday: '563472000000',
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        birthday: '687024000000',
                        address: '深圳市南山区深南大道'
                    }
                ],
                editIndex: -1,  // 当前聚焦的输入框的行数
                editName: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
                editAge: '',  // 第二列输入框
                editBirthday: '',
                editAddress: '',  // 第三列输入框
            }
        }
    }
</script>