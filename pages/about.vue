<script lang='ts' setup>
import { marked } from 'marked';
import 'github-markdown-css/github-markdown-dark.css'

marked.setOptions({
    breaks: true,
})

const link: marked.TokenizerExtension | marked.RendererExtension | (marked.TokenizerExtension & marked.RendererExtension) = {
    name: 'link',
    start(this, src: string) { return 1; }, // 提示 Marked.js 停止并检查是否匹配
    renderer(this: marked.RendererThis, token: marked.Tokens.Generic): string {
        return `<a href="${token.href}" target="_blank">${token.text}</a> `;
    }
}

marked.use({
    extensions: [link]
})

let readme = ref('')


fetch('/README.md')
    .then(res => res.text())
    .then(res => {
        readme.value = marked(res)
    })

useSeoMeta({
    title: '关于小莫',
})

</script>
<template>
    <v-container class="about">
        <div class="markdown-body" v-html="readme"></div>
    </v-container>
</template>
<script lang='ts'>

export default {
    name: 'about',
}
</script>
<style lang='less' scoped>
.about {
    padding: 10px;

    .markdown-body {
        background-color: transparent;


    }
}
</style>