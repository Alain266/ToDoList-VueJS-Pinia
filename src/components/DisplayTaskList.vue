<script lang="ts">
    import AddTask from './AddTask.vue'
    import { mapStores } from 'pinia'
    import { useTaskStore } from '../stores/TaskStore.ts'
    import  TaskCard from '../components/TaskCard.vue'
    import { initializeApp } from "firebase/app";
    import { getFirestore  } from "firebase/firestore";
    import { doc, getDoc } from "firebase/firestore";

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyChe4yntohE1ntk4fIxslkB_Ixl6k95c4g",
    authDomain: "todolist-32d17.firebaseapp.com",
    projectId: "todolist-32d17",
    storageBucket: "todolist-32d17.appspot.com",
    messagingSenderId: "548994575919",
    appId: "1:548994575919:web:f48a8f1499744f8ad3a0da",
    measurementId: "G-DDGF7SHZFY"
};

    const appFirestore = initializeApp(firebaseConfig);
    const db = getFirestore(appFirestore);
    const docRef = doc(db, "notes/3d0hMpovcCJKnPNUQvCV");
    const docSnap = await getDoc(docRef);
    const docState = docSnap.data().state;
    const docDescription = docSnap.data().description;
    const docImportance = docSnap.data().importance;
    const docUnderTask = docSnap.data().underTask;
    console.log(docState, docDescription, docImportance, docUnderTask);

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
