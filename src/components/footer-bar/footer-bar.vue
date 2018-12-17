<template>
  <el-footer>
    <div class="bottom-navigation">
      <el-row>
        <el-col :span="18">
          <el-row>
            <el-col :span="3">
              <router-link to="/about"><div class="navigation-title">关于我们</div></router-link>
              <router-link to="/about"><div class="navigation-item">公司概况</div></router-link>
              <router-link to="/about"><div class="navigation-item">企业资质</div></router-link>
              <router-link to="/about"><div class="navigation-item">人才团队</div></router-link>
            </el-col>
            <el-col :span="3">
              <router-link to="/news"><div class="navigation-title">新闻资讯</div></router-link>
              <router-link to="/news"><div class="navigation-item">企业要闻</div></router-link>
              <router-link to="/news"><div class="navigation-item">行业动态</div></router-link>
              <router-link to="/news"><div class="navigation-item">战略合作</div></router-link>
            </el-col>
            <el-col :span="3">
              <router-link to="/business"><div class="navigation-title">经典项目</div></router-link>
              <router-link to="/business"><div class="navigation-item">国内项目</div></router-link>
              <router-link to="/business"><div class="navigation-item">国外项目</div></router-link>
            </el-col>
            <!--<el-col :span="3">-->
              <!--<div class="navigation-title">技术创新</div>-->
              <!--<div class="navigation-item">技术实力</div>-->
              <!--<div class="navigation-item">技术交流</div>-->
            <!--</el-col>-->
            <el-col :span="3">
              <router-link to="/culture"><div class="navigation-title">企业文化</div></router-link>
              <router-link to="/culture"><div class="navigation-item">文化理念</div></router-link>
              <router-link to="/culture"><div class="navigation-item">文化建设</div></router-link>
              <router-link to="/culture"><div class="navigation-item">党群建设</div></router-link>
            </el-col>
            <el-col :span="3">
              <router-link to="/practice"><div class="navigation-title">BIM实训基地</div></router-link>
              <router-link to="/practice"><div class="navigation-item">基地介绍</div></router-link>
              <router-link to="/practice"><div class="navigation-item">权威授权牌</div></router-link>
              <router-link to="/practice"><div class="navigation-item">招生简章</div></router-link>
              <router-link to="/practice"><div class="navigation-item">培训实况 </div></router-link>
            </el-col>
            <el-col :span="3">
              <router-link to="/recruiting"><div class="navigation-title">招贤纳士</div></router-link>
              <router-link to="/recruiting"><div class="navigation-item">人才理念</div></router-link>
              <router-link to="/recruiting"><div class="navigation-item">社会招聘</div></router-link>
              <router-link to="/recruiting"><div class="navigation-item">校园招聘</div></router-link>
            </el-col>
            <el-col :span="3">
              <div class="navigation-title">友情链接</div>
              <a target="_blank" href="http://www1.tylin.com.cn/"><div class="navigation-item">林同棪国际</div></a>
              <div class="navigation-item">达尔集团</div>
              <div class="navigation-item">投诉建议</div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6">
          <div class="code">
            <img src="./QA-code.jpg"/>
            <span>关注微信扫描二维码</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bottom-address">
      <el-row>
        <el-col :span="12">
          <span>通信地址：重庆市渝北区春兰3路地勘大厦13楼</span>
        </el-col>
        <el-col :span="12">
          <span class="tylin-copy">COPYRIGHT&copy;2018- 林同棪（重庆）国际工程技术有限公司版权所有</span>
        </el-col>
      </el-row>
    </div>
  </el-footer>
</template>

<script>
    export default {
        name: "footer-bar"
    }
</script>

<style scoped>
  .el-footer {
    line-height: 60px;
    bottom: 0;
    width: 100%;
    padding: 0;
    color: #fff;
  }
  .el-footer .bottom-address {
    background-color: #333;
    font-size: 10px;
  }
  .el-footer .bottom-navigation {
    background-color:#333;
    height: 275px;
    padding-top: 30px;
  }
  .el-footer .bottom-address .el-row {
    border-top: 1px #797979 solid;
    color: #928787;
  }
  .el-footer .bottom-address .el-row,
  .el-footer .bottom-navigation .el-row {
    width: 1280px;
    margin: 0 auto;
  }
  .el-footer .navigation-title {
    color: #FFFFFF;
    font-size: 13px;
    font-weight: bold;
  }
  .el-footer .navigation-item {
    color: #928787;
    font-size: 12px;
    line-height: 33px;
  }
  .el-footer .code img {
    width: 104px;
  }
  .el-footer .code {
    text-align: right;
    margin-top: 23px;
    border: 1px #ccc solid;
    width: 109px;
    height: 121px;
    padding: 30px;
    margin-left: 147px;
  }
  .el-footer .connection {
    text-align: right;
    font-size: 12px;
    margin-top: 80px;
  }
  .el-footer .code span{
    font-size: 10px;
    font-weight: bold;
    display: inline-block;
    position: absolute;
    width: 118px;
    top: 148px;
    right: 31px;
  }
</style>
