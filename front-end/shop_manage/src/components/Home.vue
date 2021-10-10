<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      logout(){
        window.sessionStorage.removeItem('token')
        this.$router.push('/push')
      }
    }
  }

</script>
<style lang="stylus" rel="text/stylus" scoped>

</style>