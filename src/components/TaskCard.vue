<script lang="ts">
    import { useTaskStore } from '../stores/TaskStore.ts'
    import { mapActions } from 'pinia'

    export default {
        name: "TaskCard",
        methods: {
            ...mapActions(useTaskStore, ['deleteLi']),
        },
        props: {
            task: String,
            id: Number,
            checked: Boolean
        },
        emits: ['update:checked']
    }
</script>

<template>
    <div class="task">
        <li>
            <p id="task"> {{ task }} </p>
            <p> {{ importance }}</p>
            <p> {{ description }}</p>
            <label for="state"> Etat </label>
            <input name="state" type="checkbox" :checked="checked" @change="$emit('update:checked', $event.target.checked)">
            <p> {{ underTask }}</p>
            <button @click="deleteLi(id, task)">Delete</button>
        </li>
    </div>
</template>

<style scoped>
    li{
        list-style: none;
        display: flex;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 0.5rem;
        margin: 0.5rem 0; 
    }

    p{
        margin-right: 1rem;
        max-width: 50%;
        overflow-wrap: break-word;
    }
    
    label{
        margin-right: 0.5rem;
    }

    button{
        margin-left: 1rem;
        border: none;
        border-radius: 15px;
        padding: 0.3rem 0.5rem;
        background-color: rgb(255, 255, 255);
    }

    #task{
        font-weight: bold;
    }
</style>
