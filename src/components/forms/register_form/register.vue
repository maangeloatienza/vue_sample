<template>
    <div id='register'>
        <app-register>
            <div slot="form-header">
                <h3>Register</h3>
            </div>
            <div slot="form-fields">
                
                <input type="text" v-model='user.first_name' placeholder="First Name">
                <br>
            
                <input type="text" v-model='user.last_name' placeholder="Last Name">
                <br>
            
                <input type="text" v-model='user.address' placeholder="Address">
                <br>
            
                <input type="email" v-model='user.email' placeholder="Email address">
                <br>
            
                <input type="text" v-model='user.phone_number' placeholder="Phone Number">
                <br>

                <label for="">Roles</label>
                <select v-model="user.role_id" v-on:change='handleRole($event)'>>
                    <option 
                        v-for="role in roles">
                    {{role.name}}</option>
                </select>
            
                <input type="text" v-model='user.username' placeholder="Username">
                <br>
            
                <input type="password" v-model='user.password' placeholder="Password">
                <br>
            
                <input type="password" v-model='user.confirm_password' placeholder="Confirm password">
                <br>
            </div>
            <div slot="form-controls">
                <button v-on:click.prevent="handleSubmit">Register</button>
            </div>
        </app-register>
    </div>
</template>

<script>
import CustomForm from './../custom_form.vue';

export default {
    components : {
        'app-register' : CustomForm
    },
    data() {
        return {
            user : {
                'first_name'        : '',
                'last_name'         : '',
                'username'          : '',
                'email'             : '',
                'phone_number'      : '',
                'role_id'           :'',
                'address'           : '',
                'password'          : '',
                'confirm_password'  : '',
                'role'              : ''
            },
            roles : []
        }
    },
    methods : {
        handleSubmit : function() {
            this.$http.post(`users?role=${this.user.role}`,{

                first_name : this.user.first_name,
                last_name : this.user.last_name,
                email : this.user.email,
                phone_number : this.user.phone_number,
                address : this.user.address,
                role_id : this.role_id,
                username : this.user.username,
                password : this.user.password,
                confirm_password : this.confirm_password

            }).then(function(data){
                console.log(this.user);
            })
        },
        handleRole : function(event) {
            this.user.role = event.target.value;
            console.log(this.user);
        }
    },
    created() {
        this.$http.get('roles').then(function(data){
            let res = data.body.data;

            console.log(res);
            this.roles = res;
        })
    }
    
}
</script>

<style scoped>


</style>