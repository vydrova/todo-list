<template>
    <div v-if="open" class="popup">
        <div class="popup__content">
            <div class="u-m-b-10">Opravdu si přejete danou položlu smazat?</div>
            <div class="u-center">
                <button @click="deleteAndClose($event)">Ano</button><button @click="close($event)">Ne</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useToDoStore } from '@/stores/toDoList';

export default defineComponent({
    props: {
        id: { type: Number },
        open: { type: Boolean, default: false },
    },
    setup(props, { emit }) {
        const store = useToDoStore();
        const { deleteItem } = store;

        function deleteAndClose(event: object) {
            deleteItem(props.id)
            close(event)
        }

        const close = (event: object) => {
            emit("onClick", null)
        }

        return { deleteAndClose, close };
    },
});
</script>