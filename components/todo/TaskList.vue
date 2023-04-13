<script lang='ts' setup>
import { TodoItem } from "@/model/Interfaces"

const props = defineProps<{
    task: TodoItem
}>()

const todo = useTodo()

let style = computed(() => {
    if (props.task.important && props.task.urgent) {
        return {
            color: '#311B92',
            icon: 'mdi-alert-circle-outline'
        }
    }

    if (props.task.important) {
        return {
            color: '#C62828',
            icon: 'mdi-alert-circle-outline'
        }
    }
    if (props.task.urgent) {
        return {
            color: '#F9A825',
            icon: 'mdi-clock-time-eight-outline'
        }
    }
    return {
        color: '#00ACC1',
        icon: 'mdi-reload'
    }
})

let init = computed(() => {
    let text = ''
    if (props.task.important) {
        text += '重要'
    }
    if (props.task.urgent) {
        text += ' 紧急'
    }

    return text
})



function del() {
    // 从 todo.tasks 中删除 props.task
    todo.tasks = todo.tasks.filter((item) => {
        return item.key !== props.task.key
    })
}


function done() {
    console.log("todo.tasks");
    // 完成
    todo.tasks.forEach(item => {
        if (item.key == props.task.key) {
            item.done = !item.done
        }
    });
}

</script>
<template>
    <v-timeline-item :dot-color="style.color" fill-dot :icon="style.icon">
        <template v-slot:opposite>
            {{ init }}
        </template>
        <v-card>
            <v-card-text>
                <div class="task-list">
                    <div class="title">{{ task.title }}</div>
                    <div class="btn">
                        <v-btn variant="text" append-icon="mdi-check"
                            @click="done()">{{ task.done ? '已完成' : '未完成' }}</v-btn>
                        <v-btn variant="text" append-icon="mdi-delete-outline" @click="del()">删除</v-btn>
                    </div>
                </div>
            </v-card-text>
        </v-card>
    </v-timeline-item>
</template>
<script lang='ts'>

export default {
    name: 'ToDoTaskList',
}
</script>
<style lang='less' scoped>
.task-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
        display: flex;
    }

    .btn {
        display: flex;
        flex-direction: row-reverse;
    }

}
</style>