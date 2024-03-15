<script lang="ts">
    import { useTaskStore } from '../stores/TaskStore.ts'
    import { mapStores } from 'pinia'
    import DisplayTaskList from '../components/DisplayTaskList.vue'
    
    export default {
        name: "HomeView",
        components: {
            DisplayTaskList
        },
        computed: {
            ...mapStores(useTaskStore)
        }
    }

</script>

<template>
    <main>
        <DisplayTaskList />
    </main>
</template>
