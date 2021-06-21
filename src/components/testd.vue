<template>
  <Table v-if="id=='branchinfo.ini' || id=='buildinfo.ini'"></Table>
  <Changelist v-else-if="id=='changes'" :change_list="['cpd.undelivered.newfiles','undelivered.newfiles.filtered','undelivered.newfiles','undelivered.txt']"></Changelist>   
</template>

<script>
import Table from './table.vue'
import Changelist from './changes/changelist.vue'
export default {
    name: "testd",
    data (){ return{
        d:{}
    }},
   props:{
       id:{
           type:String,
           default:"hey"
       }
   },
            components:{Table,Changelist}
            
}
</script>

<style lang="scss" scoped>

</style>