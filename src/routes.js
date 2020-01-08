import Login from './components/forms/login_form/login.vue';
import Register from './components/forms/register_form/register.vue';


export default [
    {
        path : '/',
        component : Login
    },
    {
        path : '/register',
        component : Register
    }

];