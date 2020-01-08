<template>
    <div>
        <slot name="title"></slot>
        <ul>
            <li v-for="service in services">
                <h3>{{service.name}}</h3>
                <p>{{service.price}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import {bus} from '../../main';

export default {
    props : {
       services : {
            type : Array,
            required : true       }
    },
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
li {
    list-style: none;
}

li p, li h3 {
    color : white
}
/* 
    Classes
*/


</style>