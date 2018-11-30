<template>
  <div class="business-areas">
    <div class="top-menu">
      <div class="top-menu-location">
        <span>您现在的位置：首页>业务领域>{{activeName}}</span>
      </div>
    </div>
    <div class="tabs">
      <el-tabs v-model="activeName">
        <el-tab-pane label="项目全过程资讯" name="项目全过程资讯">
          <label slot="label">&nbsp;&nbsp;&nbsp;项目全过程资讯</label>
          <el-row :gutter="40">
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./shuniu.jpg">
                </div>
                <div class="content-cation-js">昆明市综合交通国际枢纽<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./canlian.jpg">
                </div>
                <div class="content-cation-js">重庆市残疾人康复中心<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./guangzhou.jpg">
                </div>
                <div class="content-cation-js">广州珠江城<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./baijusi.jpg">
                </div>
                <div class="content-cation-js">白居寺长江大桥工程<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./shunyi.jpg">
                </div>
                <div class="content-cation-js">北京顺义国际学校<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./hangu.jpg">
                </div>
                <div class="content-cation-js">含谷立交改造工程<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./hongyan.jpg">
                </div>
                <div class="content-cation-js">红岩村嘉陵江大桥工程<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./huofeng.jpg">
                </div>
                <div class="content-cation-js">火凤山停车场<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./jiangbei.jpg">
                </div>
                <div class="content-cation-js">江北机场专用快速路南引道及腾龙大道二期工程<br></div>
              </div>
            </el-col>

            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./shimahe.jpg">
                </div>
                <div class="content-cation-js">双碑嘉陵江大桥东引道、石马河立交连接线工程<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./wankai.jpg">
                </div>
                <div class="content-cation-js">万开周家坝-浦里快速通道<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./caijia.jpg">
                </div>
                <div class="content-cation-js">重庆蔡家嘉陵江大桥<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./boshubao.jpg">
                </div>
                <div class="content-cation-js">重庆市快速路三纵线柏树堡立交工程<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./xiema.jpg">
                </div>
                <div class="content-cation-js">重庆市歇马“缙云新居” 公租房<br></div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="BIM全过程咨询" name="BIM全过程咨询">
          <label slot="label">BIM全过程咨询</label>
          <el-row :gutter="40">
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./guandu.png">
                </div>
                <div class="content-cation-js">官渡区人民医院<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./gaoshanwan.jpg">
                </div>
                <div class="content-cation-js">涪陵高山湾交通综合换乘枢纽<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./shigulu.jpg">
                </div>
                <div class="content-cation-js">高山湾综合客运换乘枢纽市政工程（石鼓路）<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./shuniu.jpg">
                </div>
                <div class="content-cation-js">昆明市综合交通国际枢纽<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./shuniu-1.jpg">
                </div>
                <div class="content-cation-js">昆明市综合交通国际枢纽项目<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./canlian.jpg">
                </div>
                <div class="content-cation-js">重庆市残疾人康复中心<br></div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="数字化工程管理" name="数字化工程管理">
          <label slot="label">数字化工程管理</label>
          <el-row :gutter="40">
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./gaoshanwan.jpg">
                </div>
                <div class="content-cation-js">涪陵高山湾交通综合换乘枢纽<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./shigulu01.jpg">
                </div>
                <div class="content-cation-js">涪陵高山湾综合客运换成枢纽市政工程（石鼓路）<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./lizhi.jpg">
                </div>
                <div class="content-cation-js">涪陵荔枝园立交工程<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./changjiang01.jpg">
                </div>
                <div class="content-cation-js">涪陵长江一桥南桥头立交工程<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./lantanhe.jpg">
                </div>
                <div class="content-cation-js">梁滩河水质达标2017年综合治理工程<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./zhujing.jpg">
                </div>
                <div class="content-cation-js">武汉竹清连通渠道工程<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./zhaomushan.jpg">
                </div>
                <div class="content-cation-js">照母山森林公园游路系统及配套景观完善工程<br></div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="project">
                <div class="content-cation-img">
                  <img src="./tongnan.jpg">
                </div>
                <div class="content-cation-js">重庆市潼南区潼南大道道路及景观工程<br></div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="BIM实训基地" name="BIM实训基地">
          <label slot="label">BIM实训基地&nbsp;&nbsp;&nbsp;</label>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
    export default {
        name: "business-areas",
      data() {
        return {
          activeName: '项目全过程资讯'
        };
      },
      mounted() {

      },
      created() {
      },
    }
</script>

<style lang="less">
  .business-areas {
  }
  .business-areas .top-menu {
    margin-top: 65px;
    background: url("./areas.jpg") center;
    height: 330px;
  }
  .business-areas .top-menu .top-menu-location {
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
  .business-areas .el-tabs__nav {
    margin: 16px 0 16px 244px;
  }
  .business-areas .el-tabs__nav-wrap::after {
    background-color: #fff;
  }
  .business-areas .el-tabs__item.is-active {
    color: #fff;
    background-color: #D86614;
    border-radius: 7px;
  }
  .business-areas .el-tabs__item:hover {
    cursor: pointer;
    color: #D86614;
  }
  .business-areas .el-tabs__active-bar {
    background-color:#fff;
  }
  .business-areas .el-tabs__item.is-active:hover {
    color: #fff;
  }
  .business-areas .el-tabs__item {
    padding: 0 15px;
    margin: 5px 20px;
    font-size: 16px;
  }
  .business-areas .tabs {
    width: 1280px;
    margin: 0px auto;
  }
  .business-areas .tabs .el-row {
    background-color: #F2F2F2;
    padding: 60px 67px;
  }
  .business-areas {
    .project {
      margin: 20px 0;
    }
    img {
      width: 360px;
      height: 211px;
    }
    .content-cation-js {
      line-height: 50px;
      background-color: #fff;
      width: 360px;
      text-align: center;
      margin-top: -4px;
    }
  }
</style>
