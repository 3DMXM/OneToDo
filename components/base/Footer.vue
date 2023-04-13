<script lang='ts' setup>

let friendChain = [
    {
        name: '深沟导航',
        url: 'http://www.shyngo.cn/',
    }
]

let year = new Date().getFullYear()

</script>
<template>
    <v-container fluid>
        <v-divider></v-divider>
        <v-container class="footer">
            <div class="friend-chain">
                <v-chip class="ma-2" variant="text" prepend-icon="mdi-link-variant-plus">
                    友情链接:
                </v-chip>
                <v-chip variant="text" v-for="item in friendChain" :href="item.url" target="_blank">{{ item.name }}</v-chip>
            </div>
            <p class="copyright">COPYRIGHT 2019-{{ year }} WWW.AOE.TOP ALL RIGHT RESERVED <a
                    href="https://beian.miit.gov.cn/" target="_blank" rel="nopener norefoerrer">湘ICP备2021011453号-1</a>
            </p>
        </v-container>
    </v-container>
</template>
<script lang='ts'>

export default {
    name: 'BaseFooter',
}
</script>
<style lang='less' scoped>
.footer {
    font-size: 14px;

    .friend-chain {
        a {
            margin-right: 15px;
        }
    }

    .copyright {
        text-align: center;
        color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
    }

    a {
        text-decoration: none;
        color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
    }
}
</style>