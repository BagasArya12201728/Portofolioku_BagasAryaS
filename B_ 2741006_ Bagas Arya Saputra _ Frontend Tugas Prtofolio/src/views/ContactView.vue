<script>
import BaseInput from '@/components/BaseInput.vue';
import helper from '@/utils/helper';

import d$member from '@/stores/member';

import { mapActions, mapState } from 'pinia'; 

const dummyData = [
    {
        name: 'User A',
        email: 'a@mail.com',
        pesan: 'test',
        class: 'A',
    },
    {
        name: 'User B',
        email: 'b@mail.com',
        pesan: 'test',
        class: 'B'
    },
];

export default {
    name: 'TestView',
    components: {
        BaseInput,
    },
    data: () => ({
        title: 'Contact',
        // Data
        data: [],
        // input
        input: {
            name: '',
            email: '',
            pesan: '',
            class: '',
        },
        // UI
        dropdown: {
            class: ['A','B','C',],
        },
    }),
    methods: {
        ...mapActions(d$member, ['a$add']),
        submit() {
            this.data.push({ ...this.input });
            this.reset();
        },
        reset() {
            this.input = helper.resetForm(this.input);
            //console.log(helper);
        },
        submitStore() {
            this.a$add({...this.input });
            this.reset();
        },
        logEmits(event) {
            console.log('fromEmits',event);
        },
    },
    watch: {
        'input.name'(val) {
            console.log('input name has changed to',val);
        },
    },
    created() {
        //dummyData.forEach((obj) => this.data.push(obj));
        dummyData.forEach((obj) => this.a$add(obj));
    },
    computed: {
        ...mapState(d$member, ['g$list']), 
        memberList() {
            return this.data.map((obj) => `${obj.name} - ${obj.class} - ${obj.pesan}`); 
        },
    }
};
</script>

<template>
    <div class="test">
        <h1  v-once>{{ title }}</h1>
        <form @submit.prevent="submit" @reset="reset">
            <BaseInput v-model="input.name" name="name" label="Name" type="text" @escaped="logEmits" />
            <BaseInput v-model="input.email" name="email" label="Email" type="email" @escaped="logEmits" />
            <BaseInput v-model="input.pesan" name="pesan" label="Pesan" type="text" @escaped="logEmits" />
            <label for="class">
                <p>Class</p>
                <select v-model="input.class" name="class" id="class" placeholder="select class">
                 <option value="" selected hidden disabled>Class</option>
                 <template v-for="item in dropdown.class" :key="item">
                    <option :value="item">{{ item }}</option>
                 </template>
                </select>
            </label>
            <br />
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
            </form>
            <div>
            <br />
            <br />
            <p>Member List:</p>
            <ol>
                <li v-for="(member, index) in g$list" :key="index">{{ member}}</li>
            </ol>
        </div>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .test {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family:'Times New Roman', Times, serif;
    }
}
</style>