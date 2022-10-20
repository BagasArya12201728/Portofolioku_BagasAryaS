import { defineStore } from "pinia";

const imageStore = defineStore({
    id: 'image',
    state: () => ({
        list: [
            {
                slug: 'Project 1 Provinsi Di Pulau Jawa ',
                title: 'Project 1 Provinsi Di Pulau Jawa',
                img : 'https://scontent.fsrg5-1.fna.fbcdn.net/v/t39.30808-6/311296724_474998944692767_2816121792165760553_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGKydmdtUC4OM7Fa1eXTGNX5GQzowr4XELkZDOjCvhcQq9Qn-IR9ZtYv_oKN83I03bW5jDPsMR-ENeJE1k3Ezu5&_nc_ohc=RLfGLm2P-NQAX-Y3XnS&_nc_zt=23&_nc_ht=scontent.fsrg5-1.fna&oh=00_AT9e2-sD9O59nD9QGNp10goPFFuvu-SCzRmLxSOyRilh0g&oe=6354AF89'
            },
            {
                slug: 'Project 2 Wisata Daerah Istimewa Yogyakarta',
                title: 'Project 2 Wisata Daerah Istimewa Yogyakarta',
                img: 'https://scontent.fsrg5-1.fna.fbcdn.net/v/t39.30808-6/312327757_474999388026056_1630171242819710621_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFprwxoSmWVXZhh9SEjJvjQGLV8kg9vyvsYtXySD2_K-2R7nVJpp_ZBUZjbzRW33r4ypYktdvERkDAsPAwHe_io&_nc_ohc=NdGQgeT3gU0AX_LxjwL&_nc_zt=23&_nc_ht=scontent.fsrg5-1.fna&oh=00_AT_TBeTNvgSOXDncj7X6GNr2OTYqNT372zMN6-WSVhMRpg&oe=6356140C'
            },
            {
                slug: 'Project 3 Web Portofolio',
                title: 'Project 3 Web Portofolio',
                img: 'https://scontent.fsrg5-1.fna.fbcdn.net/v/t39.30808-6/311340418_474999618026033_4749067020286145590_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHHsxklYHiji1pP1t5T4qL00be53c7jaNvRt7ndzuNo29jNimJGiRvpHROuEhFZNtCh7Hg8AtSIx971Ap2EOik5&_nc_ohc=TORRdCZpVUYAX8Zrs2D&_nc_zt=23&_nc_ht=scontent.fsrg5-1.fna&oh=00_AT_CpE9dlodUlYoOkEZ3tSfXJ6_6oYPwjK_WXEijLTzTvw&oe=6354AFE5'
            },
        ]
    }),
    actions: {},
    getters: {
        g$list: ({ list }) => list,
    },
});

export default imageStore;
