<template>
    <div class="hello">
        <button @click="testclick" ref="test">{{msg}}</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg:"原始值"
        }
    },
    methods:{
        testclick(){
            this.msg="tests";
            console.log(this.$refs.test.innerText)
            this.$nextTick(function(){
                console.log(this.$refs.test.innerText)
            })
        }
    }
}
</script>

<style>

</style>