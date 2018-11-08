<template>
    <div class="alert">
        <div class="alert-main" v-for="item in notices" :key="item.name">
            {{ item.content }}
        </div>
    </div>
</template>
<script>
    let seed = 0;
    
    function getUuid() {
        return 'alert_' + (seed++);
    }

    export default {
        data () {
            return {
                notices: []
            }
        },
        methods: {
            add (notice) {
                const name = notice.name || getUuid();

                let _notice = Object.assign({
                    name: name
                }, notice);

                this.notices.push(_notice);
            },
            remove (name) {
                const notices = this.notices;

                for (let i = 0; i < notices.length; i++) {
                    if (notices[i].name === name) {
                        this.notices.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
</script>