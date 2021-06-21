<template>
   <div class="row ">
  <div class="col-md-4 offset-md-1">
    <div class="list-group" id="list-tab" role="tablist">
      <router-link  v-for="item in tests" :key="item"    :to="{name:'info',params:{id:item}}" class="list-group-item list-group-item-action" >{{item}}</router-link>
    </div>
  </div>
  <div class="col-md-6">
      <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
    name:"testslist",
    data(){
        return{
            tests:['branchinfo.ini','buildinfo.ini','changes','complexity','cpd','datacheck_test_result','inspection','inspectioncodesmells',
            'junit_branch_coverage','junit_line_coverage','junit_test_result','logs'],
        
        }
    }

}

</script>

<style  scoped>
a{
    margin-bottom:5px;
}
</style>
