<template>
  <div class="culture">
    <div class="top-menu">
      <div class="top-menu-location">
        <span>您现在的位置：首页>企业文化>{{activeName}}</span>
      </div>
    </div>
    <div class="tabs">
      <el-tabs v-model="activeName">
        <el-tab-pane label="文化理念" name="文化理念">
          <label slot="label">&nbsp;&nbsp;&nbsp;&nbsp;文化理念</label>
          <img src="./eagle.jpg"/>
          <div class="content">
            <b>&nbsp;&nbsp;&nbsp;&nbsp;企业文化理念</b>
            <li>
              <img src="./u4.png"/>
              <span>企业精神：质量是生命、创新是灵魂、服务是根本</span>
            </li>
            <li>
              <img src="./u4.png"/>
              <span>核心组织能力：专业、创新</span>
            </li>
            <li>
              <img src="./u4.png"/>
              <span>发展理念：融中西之长、筑一流企业</span>
            </li>
            <li>
              <img src="./u4.png"/>
              <span>人才理念：搭建平台、实现价值</span>
            </li>
          </div>
        </el-tab-pane>
        <el-tab-pane label="文化建设" name="文化建设">
          <label slot="label">文化建设</label>
          <div class="cultural-construction">
            <div class="cultural-title">
              <b>为冠军而生的"赢之队"</b>
              <span>2016年6月21日</span>
            </div>
            <el-row :gutter="60">
              <el-col :span="13">
                <div class="cultural-content">
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016年6月，林同棪国际第五届篮球比赛正式拉开了帷幕。我司与以桥梁事业部为主的其他部门组成“赢之队”参加此次篮球联赛，展现我方风采。“赢之队”在两战两胜的战绩下，顺利进入决赛。
                  </p>
                </div>
              </el-col>
              <el-col :span="11">
                <div class="cultural-pic">
                  <img src="./u303.jpg"/>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="60">
              <el-col :span="11">
                <div class="cultural-pic">
                  <img src="./u304.jpg"/>
                </div>
              </el-col>
              <el-col :span="13">
                <div class="cultural-content">
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;双方运动员在良好的团队配合下分秒必争，攻防快速转化以致双方比分多次打平。三分投球、防守拦球、以及抢球罚球场面更是将全场氛围领向高潮；两队实力不分伯仲，比赛进入白热化阶段。但最终，赢之队以两分的优势，获得最终胜利。赢之队确实不负汗水，不负名号。
                  </p>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="60">
              <el-col :span="13">
                <div class="cultural-content">
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这次系列赛也真正展现了“友谊第一、比赛第二”，“团队第一、个人第二” 的公司风气。
                  </p>
                </div>
              </el-col>
              <el-col :span="11">
                <div class="cultural-pic">
                  <img src="./u305.jpg"/>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="党群建设" name="党群建设">
          <label slot="label">党群建设&nbsp;&nbsp;&nbsp;</label>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
    export default {
        name: "culture",
      data() {
        return {
          activeName: '文化理念'
        };
      },
      mounted() {

      },
      created() {
      },
    }
</script>

<style lang="less">
  .culture {
    .top-menu {
      margin-top: 65px;
      background: url("./culture.jpg") center;
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
      margin: 0 auto;
    }
    .content {
      background-color: #F2F2F2;
      padding: 60px 67px;
      margin-top: -4px;
      li{
        list-style: none;
        line-height: 46px;
        img {
          display: inline-block;
          vertical-align: middle;
        }
      }
      b {
        font-size: 18px;
        line-height: 52px;
      }
    }
    .cultural-construction {
      border: 1px solid #ccc;
      padding: 80px;
      .cultural-title {
        text-align: center;
        margin-bottom: 40px;
        b {
          display: block;
          font-size: 18px;
          line-height: 40px;
        }
        span{
          line-height: 30px;
        }
      }
      .cultural-content {
        line-height: 40px;
        height: 375px;
        display: table;
        p {
          display: table-cell;
          vertical-align: middle;
        }
      }
      .cultural-pic {
        img {
          width: 478px;
          height: 345px;
        }
      }
    }
  }
</style>
