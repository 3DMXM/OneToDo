import { TodoItem } from "@/model/Interfaces"

export const useTodo = defineStore('Todo', {
    state: () => ({
        tasks: [] as TodoItem[],
        title: ''
    }),

    getters: {

    },

    actions: {
        // 重要 | 紧急
        addList(important: boolean, urgent: boolean) {
            this.tasks.push({
                key: this.getKey(),
                title: this.title,
                important,
                urgent,
                done: false
            })
            this.title = ''
        },
        getKey() {
            // 随机生成一个key
            return Math.random().toString(36).substr(2)
        }
    },
})
