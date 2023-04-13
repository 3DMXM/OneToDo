<script lang='ts' setup>

const { logo, lazy_img } = useMain()

let navItems = [
    // { text: '首页', to: 'https://www.aoe.top' },
    { text: '博客园', to: 'https://blog.aoe.top' },
    { text: '云网盘', to: 'https://pan.aoe.top' },
    { text: '游戏库', to: 'https://game.aoe.top' },
    { text: '云签到', to: 'https://tb.aoe.top' },
]

</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="header">
                <div>
                    <nuxt-link to="/">
                        <v-avatar>
                            <v-img :src="logo" :lazy-src="lazy_img"></v-img>
                        </v-avatar>
                    </nuxt-link>
                </div>
                <v-tabs>
                    <v-tab to="/">首页</v-tab>
                    <v-tab v-for="item in navItems" :key="item.text" :href="item.to" target="_blank">
                        {{ item.text }}
                    </v-tab>
                </v-tabs>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang='ts'>

export default {
    name: 'BaseHeader',
}
</script>
<style lang='less' scoped>
.header {
    display: flex;
    justify-content: space-between;
}
</style>