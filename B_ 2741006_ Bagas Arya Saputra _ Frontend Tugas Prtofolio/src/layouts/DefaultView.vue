<script>
import MainHeader from '@/components/Main/HeaderComp.vue';
import MainFooter from '@/components/Main/FooterComp.vue';

export default {
    name: 'DefaultView',
    components: {
        MainFooter,
        MainHeader,
    },
}
</script>
<template>
    <MainHeader/>
    <main>
       <slot />
    </main>
    <MainFooter />
</template>