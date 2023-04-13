<script lang='ts' setup>

const { logo, lazy_img } = useMain()
</script>
<template>
    <v-container>
        <div class="index">
            <div class="Timo">
                <v-avatar :size="250" class="logo">
                    <v-img :src="logo" :lazy-src="lazy_img"></v-img>
                </v-avatar>
                <h1>个人编程技术分享</h1>
                <h2>小莫的个人网站, 用于记录并分享一些可能有用的东西~ </h2>
            </div>
            <div class="link">
                <v-btn variant="text" to="/about" prepend-icon="mdi-information-outline">
                    关于小莫
                </v-btn>
                <v-btn variant="text" to="/donate" prepend-icon="mdi-gift-outline" color="#42b883">给小莫投食</v-btn>
            </div>
        </div>
    </v-container>
</template>
<script lang='ts'>

export default {
    name: 'Index',
}
</script>
<style lang='less' scoped>
.index {
    min-height: calc(100vh - 300px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .Timo {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        .logo {
            box-shadow: 0 0 2rem #42b883;
            cursor: pointer;
            // 0.5s 动画
            transition: all 0.5s;

            &:hover {
                box-shadow: 0 0 3rem #42b883;
            }
        }
    }

    h1 {
        margin-top: 0.5rem;
    }

    h2 {
        color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
        text-align: center;
    }
}
</style>