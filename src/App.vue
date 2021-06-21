<template>
  <navbar></navbar>
  <div class="row justify-content-around main-row">
   <div class="row" style="margin-bottom:10px;">
     <h1 class="display-6">{{branch_name}}</h1>
   </div>
   <div class="row justify-content-center align-items-center">
     <div class="col-md-4"><label class="form-label display-6">Enter The Branch Name</label></div>
     <div class="col-md-6">
      <input type="text" class="form-control" name="" id="" v-model="branch">
     </div>
     <div class="col-md-2">
       <router-link class="btn btn-primary" :to="'/branches/'+branch" @click="search">Search</router-link>
     </div>
   </div>
 </div>
 <div class="main-row">
  <router-view></router-view> 
 </div>
 
</template>

<script>


import navbar from './components/navbar.vue'
export default {
  name: 'App',
  components: {
   navbar,
  },
  data()
  {
    return{
      branch:"",
      branch_name:""
    }
  },
  watch:{
    $route:function()
    {
      console.log(this.$route.params.branch)
      if(this.$route.params.branch)
      this.branch_name="Current-branch :- "+this.$route.params.branch
    }
  },
  methods:{
    search()
    {
      console.log("clicked")
    }
  }
}
</script>

<style scoped>
.main-row{
  margin-top:20px;
}

</style>
