<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3" v-for="item in posts" :key="item.id">
                <div>
                    <img :src="item.image_url" class="image-resize">
                </div>
                <span v-html="item.name"></span>

            </div>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios';
    export default {
        name: "ProductCard",
        data() {
            return {
                posts: [],
                errors: []
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {

        },
        computed: {

        }

    }

</script>

<style scoped>
    .image-resize{
        height: 200px;
    }

</style>