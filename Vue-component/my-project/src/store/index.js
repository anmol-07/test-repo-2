// store/index.js

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios"

Vue.use(Vuex)
Vue.use(VueAxios, axios);

export default new Vuex.Store({
    state: {
        query: '',
        results: []
    },
    getters: {
        query: state => state.query
    },
    mutations: {
        setQuery (state, newQuery) {
            state.query = newQuery;
        },
        setResults(state,resultArr){
            state.results = resultArr;
        }
    },
    actions: {
        getResults: function({ commit }) {
            axios.get(`https://api.punkapi.com/v2/beers?page=2&per_page=80 `)
                .then(r => r.data)
                        .then(results => {
                            commit('setResults', results);
                        })
            console.log(this.state.results);
                    // response.data.forEach(data => {
                    //     if (data.name.startsWith(this.$store.state.query))
                    //         this.posts.push(data);
                    // })
                    // console.log(this.posts);
                }
                // .catch(e => {
                //     this.errors.push(e)
                // })
        }

});