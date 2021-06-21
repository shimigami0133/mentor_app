<template>
    <div>
             <table class="table">
                <tbody>
                    <tr v-for="(item) in change_list" :key=item>
                    <th scope="row"><a href="">{{item}}</a></th>
                    </tr>
                    
                </tbody>
            </table>
    </div>
</template>

<script>
export default {
    name:"Changelist",
    data(){
        

        return {
           
        }
    },
    props:['change_list']
}
</script>

<style  scoped>
a{
    text-decoration: none;
}
</style>