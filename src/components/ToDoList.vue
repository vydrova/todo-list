<template>
    <div>
        <table>
            <tr>
                <th>Název úkolu</th>
                <th>Popis úkolu</th>
                <th>Stav</th>
                <th>Datum vytvoření</th>
                <th></th>
            </tr>
            <tr v-for="item in list" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.description }}</td>
                <td><input type="checkbox" :checked="item.state" @click="toggleItemState(item.id)"> {{ item.state ? 'splněno' : 'nový' }}</td>
                <td>{{ new Date(item.created).toLocaleString('cs-CZ') }}</td>
                <td>
                    <button @click="openPopUp(item.id)">Smazat</button>
                </td>
            </tr>
        </table>
        <ConfirmPopUp :open="openConfimation" :id="deleteItemId" @on-click="closePopUp"/>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useToDoStore } from '@/stores/toDoList';
import { storeToRefs } from 'pinia';
import ConfirmPopUp from '@/components/ConfirmPopUp.vue'

export default defineComponent({
    components: { ConfirmPopUp },
    setup() {
        const openConfimation = ref(false);
        const deleteItemId = ref(0)

        function openPopUp(id: number) {
            openConfimation.value = true
            deleteItemId.value = id
        }

        function closePopUp() {
            openConfimation.value = false
            deleteItemId.value = 0
        }

        const store = useToDoStore();
        const { list } = storeToRefs(store);
        const { deleteItem, toggleItemState } = store;

        return { openConfimation, deleteItemId, openPopUp, closePopUp, list, deleteItem, toggleItemState };
    },
});
</script>