<template>
    <div>
        <input v-model.number="numData" type="number" step="1" />
        <p @click='myclick' class="num">{{numData}}</p>
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                numData :9999
            }
        },
        methods:{
            myclick : function(){
                console.log('click')
            }
        }
    }
</script>

<style scoped>
.num{
    color:red
}
</style>