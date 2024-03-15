<script lang="ts">
    import { mapStores } from 'pinia'
    import { useTaskStore } from '../stores/TaskStore.ts'

    export default {
        name: "AddTask",
        data () {
            return {
                task: ''
            }
        },
        computed: {
            ...mapStores(useTaskStore)
        },
    }
</script>

<template>
    <div id="new-todo">
        <input @keyup.enter="this.tasksStore.addTask(task)" type="text" placeholder="Enter a task" name="new-todo" v-model="task"> 
        <button @click="this.tasksStore.addTask(task)">Add</button>
    </div>
</template>

<style scoped>
    label{
        font-size: 25px;
        display: flex;
        justify-content: center;
        text-align: center;
        font-weight: bold;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    input{
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 3px;
        margin-top: 1rem;
    }

    #new-todo{
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    button{
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 3px;
        margin-top: 1rem;
    }

    button:hover{
        background-color: #ccccccc7;
    }
</style>
