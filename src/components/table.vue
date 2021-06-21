<template>
   <table class="table">
  <tbody>
    <tr v-for="(item,index) in d" :key=item>
      <th scope="row">{{index+1}}</th>
     <td>{{item}}</td>
      <td>@mdo</td>
    </tr>
    
  </tbody>
</table>
</template>

<script>
import axios from 'axios'

export default {
    name: "Table",
    data (){ return{
        d:{}
    }},
   props:{
       id:{
           type:String,
           default:"hey"
       }
   },
   watch:{
       $route:async function(){

            let d=await axios.get('http://ies-iesd-qgweb.ies.mentorg.com:8080/qualitygates/wa/'+this.$route.params.branch+'/'+this.$route.params.id)
           
            const data = d.data.split(/[\n\r]/)
            let o={}
            data.forEach(line => {
                let y=line.split('=')
                if(y[1])
                o[y[0]]=y[1]
            })
this.d=o
        console.log(this.d)
                }
            }
}
</script>

<style lang="scss" scoped>

</style>