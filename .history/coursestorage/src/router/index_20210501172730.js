import Vue from 'vue'
import VueRouter from 'vue-router'
import VideoList from '../components/VideoList'
import Messages from '../smallcomponents/Messages'
import Progress from '../smallcomponents/Progress'
import Settings from '../smallcomponents/Settings'
Vue.use(VueRouter)
const routes = [
    {
        path:'/',
        name:'VideoList',
        component:VideoList
    },
    {
        path:'/progress',
        name:'Progress',
        component:Progress
    },
    {
        path:'/messages',
        name:'Messages',
        component:Messages
    },
    {
        path:'/settings',
        name:'Settings',
        component:Settings
    }
]
export default new VueRouter({
    routes,
    mode:'history'
})