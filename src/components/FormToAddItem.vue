<template>
    <form @submit.prevent="addItemAndClear(formData)">
        <input type="text" placeholder="Název úkolu" v-model="formData.name" required>
        <textarea placeholder="Popis úkolu" v-model="formData.desription" required></textarea>
        <input type="checkbox" v-model="formData.state" id="state"><label for="state">Stav</label>
        <input type="submit" value="Přidat">
    </form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useToDoStore } from '@/stores/toDoList';
export default defineComponent({
  setup() {
    const formData = ref({
        name: '',
        desription: '',
        state: false
    })

    const store = useToDoStore();
    
    function addItemAndClear(item: object) {
        if (item.name === "") {
            return
        }
        // invokes function in the store:
        store.addItem(item)

        formData.value = {
            name: '',
            desription: '',
            state: false
        }
    }
    return { formData, addItemAndClear };
  },
});
</script>
