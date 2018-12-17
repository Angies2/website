<template>
  <el-header>
    <el-row>
      <el-col :span="12">
        <img class="tylin-logo" src="./logo.png"/>
      </el-col>
      <el-col class="search-items" :span="12">
        <el-input v-model="input" prefix-icon="el-icon-search" placeholder="搜索"></el-input>
        <span class="font-twelve">&nbsp;&nbsp;中/EN</span>
      </el-col>
    </el-row>
    <el-row class="tab-navigation">
      <el-col :span="19" class="left-menu">
        <router-link to="/" class="home-link">&nbsp;&nbsp;&nbsp;<span>首页</span></router-link>
        <router-link to="/about">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>关于我们</span>&nbsp;</router-link>
        <router-link to="/news">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>新闻资讯</span>&nbsp;</router-link>
        <router-link to="/business">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>经典项目</span>&nbsp;</router-link>
        <router-link to="/practice">|&nbsp;&nbsp;&nbsp;&nbsp;<span>BIM实训基地</span>&nbsp;&nbsp;</router-link>
        <!--<router-link to="/about">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>技术创新</span>&nbsp;</router-link>-->
        <router-link to="/culture">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>企业文化</span></router-link>
        <router-link to="/recruiting">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>招贤纳士</span></router-link>
        <router-link to="/contact">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>联系我们</span></router-link>
      </el-col>
      <el-col :span="5" class="tylin-contact">
        <a target="_blank" href="http://mail.tylin.com.cn/"><img src="./e-mail.png"/><span  class="logo-color">企业邮箱登陆</span></a>
        <a target="_blank" href="http://www.tylin-js.com.cn/index.php/user/login"><img src="./OA.png"/><span  class="logo-color">企业OA登录</span></a>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
    export default {
        name: "head-bar",
      data() {
        return {
          input: ''
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style lang="less">
  .font-twelve {
    font-size: 12px;
  }
  .font-fourteen {
    font-size: 14px;
  }
  .font-ten {
    font-size: 10px;
  }
  .el-header{
    .tylin-logo{
      width: 493px;
      height: 54px;
    }

    .el-input__icon {
      line-height: 32px;
    }
    .search-items {
      margin-top: 19px;
      padding-left: 22px;
    }
  }
  .el-header .el-input {
    width: 186px;
    margin-left: 358px;
  }
  .el-header .el-input__inner {
    height: 21px;
    line-height: 21px;
    border-radius: 14px;
  }
  .el-header .tab-navigation {
    margin-top: 19px;
    .left-menu a {
      display: inline-block;
      width: 115px;
      font-weight: bold;
      &:hover span{
        border-bottom: 1px solid #FF9955;
        padding-bottom: 0;
        display: inline-block;
      }
    }
    .home-link {
      width: 62px !important;
    }
  }
  .el-header .el-input__prefix {
    top: -5px;
  }
  .el-header img {
    width: 15px;
  }
  .el-header .tylin-contact {
    padding-left: 22px;
  }
  .el-header .tylin-contact img {
    margin: -1px 7px;
  }
  .logo-color {
    color: #D86614;
  }
</style>
