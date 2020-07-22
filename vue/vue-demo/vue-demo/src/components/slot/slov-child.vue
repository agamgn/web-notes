<template>
    <div>
        <slot :user="user">
            {{user.lastName}}
        </slot>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user:{
                firstName:"扎根",
                lastName:"的"
            }
        }
    }
}
</script>
<style>

</style>

