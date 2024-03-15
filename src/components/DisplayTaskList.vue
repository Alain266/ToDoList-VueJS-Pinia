<script lang="ts">
    import AddTask from './AddTask.vue'
    import { mapStores } from 'pinia'
    import { useTaskStore } from '../stores/TaskStore.ts'
    import  TaskCard from '../components/TaskCard.vue'

    export default {
        name: "DisplayTaskList",
        methods: {
            deleteLi(button) {
                button.parentNode.style.display = 'none';
            }
        },
        computed: {
            ...mapStores(useTaskStore)
        },
        components: {
            AddTask,
            TaskCard
        }
    }
</script>

<template>
    <label for="new-todo">My ToDo List 📋</label>
    <br>
    <AddTask />
    <div>
        <TaskCard v-for="task in tasksStore.tasks" :key="task.id" :id="task.id" :task="task.task" v-model:checked="task.checked" />
    </div>
</template>

<style scoped>
label {
    font-size: 25px;
    display: flex;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-top: 1rem;
}

#new-todo {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

button {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-top: 1rem;
}

button:hover {
    background-color: #ccccccc7;
}

li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-top: 1rem
}

li input {
    width: 100%;
}

li p {
    text-align: center;
    width: 75%;
    font-weight: bold;
}
</style>
