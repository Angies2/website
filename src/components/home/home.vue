<template>
    <el-container direction="vertical">
      <header-bar></header-bar>
      <router-view name="home"></router-view>
      <footer-bar></footer-bar>
    </el-container>
</template>

<script type="text/ecmascript-6">
  import HeaderBar from '../head-bar/head-bar';
  import FooterBar from  '../footer-bar/footer-bar';

  export default {
    components: {
      'header-bar': HeaderBar,
      'footer-bar': FooterBar
    }
  };
</script>

<style scoped lang="less">
  .el-container {
    padding-top: 60px;
    .el-header {
      width: 1280px;
      margin: 0 auto;
      padding-left: 0;
    }
  }
</style>
