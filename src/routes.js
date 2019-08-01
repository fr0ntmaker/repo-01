import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import chbox from "./pages/chbox"
import myContent from "./components/myContent"
import grid from "./pages/grid"
import Autocomplete from "./components/autocomplete"

export default new VueRouter({
    routes: [
        {
            path: '',
            component: myContent
        },
        {
            path: './Home',
            component: Home
        },
        {
            path: '/cars',
            component: Cars
        },
        {
            path: '/car/:id',
            component: Car
        },
        {
            path: '/chbox',
            component: chbox
        },
        {
            path: '/grid',
            component: grid
        },
        {
            path: '/Autocomplete',
            component: Autocomplete
        }
    ],
    mode: 'history'
})