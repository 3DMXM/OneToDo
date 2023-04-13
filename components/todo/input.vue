<script lang='ts' setup>
import { ElMessage } from 'element-plus'
const todo = useTodo()

let important = ref(false)
let urgent = ref(false)

function add() {

    if (todo.title == '') {
        ElMessage({
            message: '请输入计划',
            type: 'warning',
            // duration: 1000,
        })
        return
    }

    todo.addList(important.value, urgent.value)
}

</script>
<template>
    <v-row>
        <v-col cols="12">
            <v-row>
                <v-col cols="12" md="6" lg="8">
                    <v-text-field label="计划" v-model="todo.title" variant="solo" placeholder="在这里输入你的计划" hide-details="auto"
                        @keydown.enter="add()">
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                    <v-row>
                        <v-col cols="4">
                            <v-switch hide-details="auto" color="#C62828" v-model="important" label="重要"></v-switch>
                        </v-col>
                        <v-col cols="4">
                            <v-switch hide-details="auto" color="#FFEA00" v-model="urgent" label="紧急"></v-switch>
                        </v-col>
                        <v-col cols="4" class="btn">
                            <v-btn variant="text" append-icon="mdi-plus" @click="add()">添加</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>

    </v-row>
</template>
<script lang='ts'>

export default {
    name: 'ToDoInput',
}
</script>
<style lang='less' scoped>
.btn {
    display: flex;
    align-items: center;
}
</style>