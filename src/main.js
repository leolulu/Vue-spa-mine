import Vue from 'Vue'

import maintpl from './templates/main.vue'

const vm = new Vue({
    el:'#app',
    render: c=>c(maintpl)
})