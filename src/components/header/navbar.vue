<template>
    <div class="navbar">
        <header>
            <a href="#">
                <img src="./../../assets/logo.png" alt="Logo">
            </a>

            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/register">About</router-link>
                </li>
                <li>
                    <router-link to="/">Services</router-link>
                </li>
                <li>
                    <router-link to="/">Book Now!</router-link>
                </li>
            </ul>

        </header>
        
    </div>
</template>

<script>

export default {
    data (){
        return {

        }
    }
}

</script>

<style scoped>
/* 
    Elements and tags
*/

ul {
    float : right;
    display: flex;
    flex-wrap: wrap;
}

ul li {
    list-style: none;
    float : left ;
    width : 100px;
    padding : 5px;
    margin : 7px 10px;

}

li a {
    text-decoration: none;
    color : white;
    font-size: 20px;
    font-weight: bolder;
}

a img {
    margin: 10px;
    height : 60px;
    width:  60px;
}
/* 
    Classes
*/
.navbar {
    width: 100%;
    height: 75px;
}

</style>