<template>
    <div>
        <input type="text" @input="changed" name="myquery">
    </div>
</template>

<script>
    export default {
        name: "SearchBox",
        data(){
            return{
                myQ: ''
            }
        },
        /*computed: {
            query:{
                get: function(){
                    return this.$store.state.query;
                },
                set: function(newQuery){
                    this.$store.dispatch('setQuery',newQuery);
                }
            }
        },*/
        methods: {
            changed: function(event) {
                this.$store.commit('setQuery', event.target.value);
                this.$store.dispatch('getResults');
            }
        }

    }
</script>

<style scoped>

</style>