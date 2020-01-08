<template>
    <div id="forms">
        <form>
            <div id="form-header">
                <slot name="form-header"></slot>
            </div>
            <div id="form-fields">
                <slot name="form-fields"></slot>
            </div>
            <div id="form-controls">
                <slot name="form-controls"></slot>
            </div>
            <div id="form-links">
            </div>
        </form>

    </div>
</template>

<script>

export default {


    data (){
        return {

        }
    },
    methods : {

    }
}

</script>

<style scoped>
/* 
    Elements and tags
*/

input {
    width: 97%;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    border-radius: 5px ;
}

#form-header {
    text-align: center;
}

#form-controls {
    height : 30px;
    width: 97%;
    margin: auto;
}

/* 
    Classes and IDs
*/
#forms {

    margin: auto;
}

</style>