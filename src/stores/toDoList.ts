import { defineStore } from 'pinia'

interface ToDoItem {
    id: Number;
    name: String;
    description: String;
    state: Boolean;
    created: Date;
}

export const useToDoStore = defineStore('todoList', {
    state: () => ({
        list: [] as ToDoItem[],
        id: 1,
    }),
    actions: {
        addItem(data: Object) {
            const newItem = {
                id: this.id++,
                name: data.name, 
                description: data.desription, 
                state: data.state, 
                created: Date.now()
            };
            this.list.push(newItem)
        },
        deleteItem(itemID: Number) {
            this.list = this.list.filter((item) => {
                return item.id !== itemID
            })
        },
        toggleItemState(itemID: Number) {
            const item = this.list.find((item) => item.id === itemID);
            if (item) {
                item.state = !item.state;
            }
        },
    },
})