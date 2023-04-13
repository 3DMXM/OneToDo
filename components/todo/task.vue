<script lang='ts' setup>

const todo = useTodo()


let tasks = computed(() => {
    // 重新排序 todo.tasks
    return todo.tasks.sort((a, b) => {
        if (a.important && a.urgent) {
            return -1
        }
        if (b.important && b.urgent) {
            return 1
        }
        if (a.important) {
            return -1
        }
        if (b.important) {
            return 1
        }
        if (a.urgent) {
            return -1
        }
        if (b.urgent) {
            return 1
        }
        return 0
    })
})

</script>
<template>
    <v-row>
        <v-col cols="12">
            <!-- alert-circle-outline -->
            <v-card title="计划列表">
                <template v-slot:subtitle>
                    <v-icon icon="mdi-alert-circle-outline" size="18" color="#FFEA00" class="me-1 pb-1"></v-icon>
                    我推荐您先做 重要 然后再做 紧急 的事
                </template>

                <v-card-text>
                    <div class="font-weight-bold ms-1 mb-2">计划</div>
                    <v-timeline align="center" v-if="tasks.length > 0" class="timeline">
                        <TodoTaskList v-for="task in tasks" :task="task" :key="task.key"> </TodoTaskList>
                    </v-timeline>
                    <div class="empty" v-else>
                        <v-icon icon="mdi-tray-remove" size="70" color="#1565C0"></v-icon>
                        <p>你还没有计划,快去添加吧</p>
                    </div>
                </v-card-text>
            </v-card>

        </v-col>
    </v-row>
</template>
<script lang='ts'>

export default {
    name: 'ToDoTask',
}
</script>
<style lang='less' scoped>
.empty {
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.timeline {
    // 添加动画
    transition: all 0.5s;
}
</style>