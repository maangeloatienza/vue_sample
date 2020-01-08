<template>
    <div id="login">
        <custom-form>
            <div slot="form-header">
                <h3>Login</h3>
            </div>
            <div slot="form-fields">
                <input type="text" v-model='user.username' placeholder="Username" required>
                <input type="password" v-model='user.password' placeholder="Password" required>
            </div>
            <div slot="form-controls">
                <button v-on:click.prevent="handleSubmit">Login</button>
            </div>
        </custom-form>
    </div>
</template>

<script>
import CustomForm from './../custom_form.vue';

export default {
    components : {
        'custom-form' : CustomForm
    },
    data (){
        return {
            user : {
                username : '',
                password : ''
            }
        }
    },
    methods : {
        handleSubmit : function(){
            this.$http.post('users/login',{
                username : this.user.username,
                password : this.user.password
            }).then(function(data){
                console.log(data)
            });
        }
    }
}
</script>

<style scoped>



</style>