import Vue from 'vue'
import Vuex from 'vuex'
import videolists from './modules/videolists'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        videolists
    }
})