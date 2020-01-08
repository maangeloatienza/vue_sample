<template>
  <div>
    <app-navbar></app-navbar>
    
    <router-view></router-view>
    
  </div>
</template>

<script>
import NavigationBar from './components/header/navbar.vue';

export default {
  components : {
    'app-navbar' : NavigationBar,

  },
  data () {
    return {
      component : 'app-login'    
    }
  }

}
</script>

<style>

html {
  background: url('./assets/classic-pen.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: 'Ubuntu', sans-serif;
  color : white;
}

body {
  margin : 0;
  padding : 0;
}

#forms {
  width : 300px;
  margin: auto;
}

.form-header-selection{
  width : 48%;
  float : left;
  margin : 2px;
}

</style>
