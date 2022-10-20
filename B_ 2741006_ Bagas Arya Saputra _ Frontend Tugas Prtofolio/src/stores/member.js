import { defineStore } from "pinia";

const d$member  = defineStore({
    id: 'member',
    state: () => ({
        list: [],
    }),
    actions: {
        a$add(data) {
            this.list.push(data);
        },
    },
    getters: {
        g$list: ({ list }) => list.map((obj) => `${obj.name} - ${obj.class} - ${obj.pesan}`),
    },
});

export default d$member