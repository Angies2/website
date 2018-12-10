<template>
    <div class="practice-base">
      <div class="top-menu">
        <div class="top-menu-location">
          <span>您现在的位置：首页>BIM实训基地>{{activeName}}</span>
        </div>
      </div>
      <div class="tabs">
        <el-tabs v-model="activeName">
          <el-tab-pane label="基地介绍" name="基地介绍">
            <label slot="label">&nbsp;&nbsp;&nbsp;&nbsp;基地介绍</label>
            <div class="introduced">
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BIM专业技术技能实训基地由工信部教育与考试中心审批通过，并由工信部教育与考试中心直接授权铜牌。获得授权的基地可按《建筑信息模型（BIM）
                专业技术技能标准》组织本地区（重庆地区）培训以及《建筑信息模型（BIM）应用工程师》考试，并成为此类考试的官方考点，
                实训基地所用平台为工信部教育与考试中心官方的唯一考试平台。完成BIM专业技术技能实训基地培训并通过考试的考生可获得工信部教育与考试中心颁发证书，
                纳入工信部教育与考试中心建立的全国专业技术技能人才数据库，从而成为BIM专业人才队伍的一员。
              </p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="权威授权牌" name="权威授权牌">
            <label slot="label">权威授权牌</label>
          </el-tab-pane>
          <el-tab-pane label="招生简章" name="招生简章">
            <label slot="label">招生简章</label>
            <div class="rules-pic">
              <img src="./01.jpg"/>
              <img src="./02.jpg"/>
              <img src="./03.jpg"/>
              <img src="./04.jpg"/>
              <img src="./05.jpg"/>
            </div>
          </el-tab-pane>
          <el-tab-pane label="培训实况" name="培训实况">
            <label slot="label">培训实况&nbsp;&nbsp;&nbsp;&nbsp;</label>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
    export default {
        name: "practice-base",
      data() {
        return {
          activeName:"基地介绍"
        };
      },
      mounted() {

      },
    }
</script>

<style lang="less">
  .practice-base {
    .top-menu {
      margin-top: 65px;
      background: url("./BIMtrain.jpg") center;
      height: 330px;
    }
    .top-menu .top-menu-location {
      color: #fff;
      border-radius: 5px;
      width: 1280px;
      text-align: right;
      margin: 0 auto;
      padding-top: 230px;
      span {
        background-color: #3031339c;
        padding: 5px;
        border-radius: 3px;
      }
    }
   .el-tabs__nav {
      margin: 16px 0;
      text-align: center;
      width: 1280px;
    }
    .el-tabs__nav-wrap::after {
      background-color: #fff;
    }
    .el-tabs__item.is-active {
      color: #fff;
      background-color: #D86614;
      border-radius: 7px;
    }
    .el-tabs__item:hover {
      cursor: pointer;
      color: #D86614;
    }
    .el-tabs__active-bar {
      background-color:#fff;
    }
    .el-tabs__item.is-active:hover {
      color: #fff;
    }
    .el-tabs__item {
      padding: 0 15px;
      margin: 5px 20px;
      font-size: 16px;
    }
    .tabs {
      width: 1280px;
      margin: 0px auto;
      .rules-pic {
        text-align: center;
        margin-bottom: 40px;

      }
      .introduced {
        margin-bottom: 40px;
        p {
          line-height: 40px;
        }
      }
    }
    .el-tabs__content {
      border: 1px solid #ccc;
      padding: 20px 20px 0 20px;
      margin-bottom: 40px;
    }
  }
</style>
