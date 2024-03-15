<script lang="ts">
    import { useTaskStore } from '../stores/TaskStore.ts'
    import { mapStores } from 'pinia'
    export default {
        name: "AboutView",
        computed: {
            ...mapStores(useTaskStore)
        }
    }
</script>

<template>
    <div class="about">
        <h1>This is an open source ToDo list made with Vue.js and Piña</h1>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
