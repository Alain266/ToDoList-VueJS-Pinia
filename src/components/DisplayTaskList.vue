<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import AddTask from './AddTask.vue';
import { mapStores } from 'pinia';
import { useTaskStore } from '../stores/TaskStore.ts';
import TaskCard from '../components/TaskCard.vue';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
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

export default defineComponent({
    name: "DisplayTaskList",
    components: {
        AddTask,
        TaskCard
    },
    data() {
        return {
            checked: false,
            docId: '',
            docLabel: '',
            docState: '',
            docDescription: '',
            docImportance: '',
            docUnderTask: ''
        };
    },
    methods: {
        deleteLi(button) {
            button.parentNode.style.display = 'none';
        }
    },
    computed: {
        ...mapStores(useTaskStore)
    },
    async mounted() {
        try {
            const docRef = doc(db, "notes/3d0hMpovcCJKnPNUQvCV");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                this.docId = data.id;
                this.docLabel = data.label;
                this.docState = data.state;
                this.docDescription = data.description;
                this.docImportance = data.importance;
                this.docUnderTask = data.underTask;
                console.log(this.docState, this.docLabel, this.docId, this.docDescription, this.docImportance, this.docUnderTask);
            } else {
                console.error("No such document!");
            }
        } catch (error) {
            console.error("Error getting document:", error);
        }
    }
});
</script>


<template>
    <label for="new-todo">My ToDo List 📋</label>
    <br>
    <AddTask />
    <div>
        <TaskCard v-for="task in tasksStore.tasks" :key="task.id" :id="task.id" :task="task.task" v-model:checked="task.checked" />
    </div>
    <div class="task">
        <li id="firebaseTask">
            <p>{{ docLabel }}</p>
            <p> {{ docImportance }}</p>
            <p> {{ docDescription }}</p>
            <li class = "underTask"> {{ docUnderTask[0] }} </li>
            <li class = "underTask"> {{ docUnderTask[1] }} </li>
            <li class = "underTask"> {{ docUnderTask[2] }} </li>
            <label for="state"> Etat </label>
            <input name="state" type="checkbox" :checked="checked" @change="$emit('update:checked', $event.target.checked)">
            <button @click="deleteLi(id, task)">Delete</button>
        </li>
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

/* #firebaseTask {
        list-style: none;
        display: flex;
        flex-direction: row;
} */

</style>
