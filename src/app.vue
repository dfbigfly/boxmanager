<template>
    <div>
        <headertemplate></headertemplate>
        <div>
            <router-link to="/index">Home</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import headertemplate from './components/headerTem.vue';
    export default{
        components:{headertemplate}
    }
</script>
