<script lang='ts' setup>

useSeoMeta({
    title: '计划列表 To Do List',
    description: '你可以在这里输入你想做的事,我会帮你记录在你的浏览器里面,我不会收集你的任何数据,请放心使用.',
})

</script>
<template>
    <v-container>
        <TodoHeader></TodoHeader>
        <TodoInput></TodoInput>
        <TodoTask></TodoTask>
    </v-container>
</template>
<script lang='ts'>

export default {
    name: 'ToDo',
}
</script>
<style lang='less' scoped>
.todo {
    height: calc(100vh - 300px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>