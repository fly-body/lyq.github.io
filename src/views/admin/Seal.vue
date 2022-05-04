<template>
  <div class="seal">
    <el-card>
      <el-header>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="账号管理" name="first"></el-tab-pane>
        </el-tabs>
      </el-header>
      <el-main>
        <seal-info></seal-info>
      </el-main>
    </el-card>
  </div>
</template>

<script>
import SealInfo from "./seal/SealInfo.vue"
export default {
    name: 'seal',
    data(){
      return {
        activeName: 'first',
        isShow: true 
      }
    },
    mounted(){
      this.getData()
    },
    methods: {
      /**
       * 网络请求
       */
      getData(){
        // this.$axios.get()

      },
      /**
       * 业务层
       */
      handleClick(event){
        // if(event.name === 'first'){
        //   return this.isShow = true;
        // }else{
        //   return this.isShow = false;
        // }
      }
    },
    watch:{
    },
    components:{
      SealInfo,
    }
}
</script>

<style>

</style>