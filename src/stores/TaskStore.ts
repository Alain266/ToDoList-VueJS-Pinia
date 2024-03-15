import { defineStore } from 'pinia';

export const useTaskStore = defineStore('tasks', {
    state: () => ({
        tasks: []
    }),
    getters: {
        getId() {
            return this.tasks.length + 1
        }
    },
    actions: {
        addTask(task: string) {
            this.tasks.push({"id": this.getId, "task": task, "completed": true});
            console.log("Added task: " + task);
        },
        deleteLi (id: number, task: string) {
            const index = this.tasks.findIndex( task => task.id === id);
            this.tasks.splice(index, 1);
            console.log("Deleted task: " + task);
        },
    },
});
