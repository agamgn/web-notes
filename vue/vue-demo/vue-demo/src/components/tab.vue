<template>
    <div class="tab">
        <router-link :to="{name:'a'}" tag>a</router-link>
        <router-link :to="{name:'b'}">b</router-link>
        <router-link :to="{name:'c'}">c</router-link>
        <router-view></router-view>
    </div>
    
</template>

<script>

export default {
    
}
</script>

<style>
    .tab{
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        /* transform: translate(-50%,-50%); */
        width: 300px;
        height: 500px;
        border: 1px solid red;
    }
</style>