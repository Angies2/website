<template>
    <div class="about-us">
      <div class="top-menu">
        <div class="top-menu-location">
          <span>您现在的位置：首页>关于我们>{{activeName}}</span>
        </div>
      </div>
      <div class="tabs">
        <el-tabs v-model="activeName">
          <el-tab-pane label="公司概况" name="公司概况">
            <label slot="label">&nbsp;&nbsp;&nbsp;&nbsp;公司概况</label>
            <el-row :gutter="60">
              <el-col :span="6">
                <div class="right">
                  <img src="./house.jpg"/>
                  <!--<div class="right-content">-->
                    <!--<span>联系电话：023-63087850</span>-->
                  <!--</div>-->
                </div>
              </el-col>
              <el-col :span="18">
                <div class="left-bar">
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;林同棪(重庆)国际工程技术有限公司成立于2010年，隶属于国际知名工程咨询公司Dar group(达尔集团)和林同棪国际，系林同棪国际中国公司子公司，致力于成为工程全生命期信息化服务的首选集成商。公司依托集团在城市基础设施及建筑领域的优势，以及国际化人才资源和丰富的国内外大型项目工程实践，向用户提供基于BIM+的全过程工程咨询、工程监理、项目管理等服务，我们也依托国内外的BIM专家资源和大量BIM项目实践经验，向社会培养更多的BIM技术人才。
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司现有房屋建筑工程、市政公用工程监理甲级资质，获得英国皇家特许建造学会(CIOB)认证企业，
                    也是由国家工业和信息化部教育与考试中心指定的全国17个BIM技术技能实训基地之一。
                    并通过了质量、环境和职业健康安全管理一体化体系认证。
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司立足重庆，在深圳、江苏、四川、云南、广西等地设立多家分公司，面向全国市场拓展业务。我们不忘初心，砥砺前行，竭诚为国内外的客户提供国际化、
                    创新和专业的信息化工程咨询服务，持续超越客户期望是我们的永恒追求!
                  </p>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="企业资质" name="企业资质">
            <el-row :gutter="40">
              <el-col :span="6">
                <div class="certificate" @click="magoifying($event)">
                  <div class="content-cation-img">
                    <img src="./quality.jpg">
                  </div>
                  <div class="content-cation-img2"></div>
                  <div class="content-cation-js">质量管理体系认证证书<br></div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="certificate" @click="magoifying($event)">
                  <div class="content-cation-img">
                    <img src="./environment.jpg">
                  </div>
                  <div class="content-cation-img2"></div>
                  <div class="content-cation-js">环境管理体系认证证书<br></div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="certificate" @click="magoifying($event)">
                  <div class="content-cation-img">
                    <img src="./environment.jpg">
                  </div>
                  <div class="content-cation-img2"></div>
                  <div class="content-cation-js">职业健康安全管理体系认证证书<br></div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="certificate" @click="magoifying($event)">
                  <div class="content-cation-img">
                    <img src="./supervision0.jpg">
                  </div>
                  <div class="content-cation-img2"></div>
                  <div class="content-cation-js">监理资质正本<br></div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="certificate" @click="magoifying($event)">
                  <div class="content-cation-img">
                    <img src="./supervision-1.jpg">
                  </div>
                  <div class="content-cation-img2"></div>
                  <div class="content-cation-js">监理资质证书附页<br></div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="certificate" @click="magoifying($event)">
                  <div class="content-cation-img">
                    <img src="./supervision.jpg">
                  </div>
                  <div class="content-cation-img2"></div>
                  <div class="content-cation-js">监理资质副本2-1<br></div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="certificate" @click="magoifying($event)">
                  <div class="content-cation-img">
                    <img src="./CIOB.jpg">
                  </div>
                  <div class="content-cation-img2"></div>
                  <div class="content-cation-js">英国皇家特许建造学会（CIOB）认证企业<br></div>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="企业荣誉" name="企业荣誉">
            <label slot="label">企业荣誉&nbsp;&nbsp;&nbsp;</label>
            <el-row :gutter="40">
              <el-col :span="6">
                <div class="certificate" @click="magoifying($event)">
                  <div class="content-cation-img">
                    <img src="./BIM-1.jpg">
                  </div>
                  <div class="content-cation-img2"></div>
                  <div class="content-cation-js">BIM技术技能实训基地<br></div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="certificate" @click="magoifying($event)">
                  <div class="content-cation-img">
                    <img src="./technology.jpg">
                  </div>
                  <div class="content-cation-img2"></div>
                  <div class="content-cation-js">科协工作考核特等奖获奖证书<br></div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="certificate" @click="magoifying($event)">
                  <div class="content-cation-img">
                    <img src="./BIM-2.jpg">
                  </div>
                  <div class="content-cation-img2"></div>
                  <div class="content-cation-js">万开周家坝-浦里快速通道的BIM应用获奖证书<br></div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="certificate" @click="magoifying($event)">
                  <div class="content-cation-img">
                    <img src="./BIM-3.jpg">
                  </div>
                  <div class="content-cation-img2"></div>
                  <div class="content-cation-js">万开周家坝-浦里快速通道的BIM应用获奖证书1<br></div>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <!--<el-tab-pane label="人才团队" name="人才团队">-->
          <!--</el-tab-pane>-->
        </el-tabs>
      </div>
      <div class="b_pic" @click="narrow">
        <img src="./environment.jpg" alt="">
      </div>
    </div>
</template>

<script>
    export default {
      name: "about-us",
      data() {
        return {
          activeName: '公司概况'
        };
      },
      mounted() {

      },
      created() {
      },
      methods: {
        magoifying: function(event) {
          var sr = $(event.currentTarget).find('img').attr('src');
          $('body').addClass('ac');
          $('.b_pic img').attr('src', sr);
          $('.b_pic').addClass('ac')
        },
        narrow: function() {
          $('.b_pic').removeClass('ac');
          $('body').removeClass('ac');
        }
      },
    }
</script>

<style lang="less">
  .b_pic{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.8);
    transform: scale(0);
    transition: all .4s cubic-bezier(.35,.75,.55,1) 0.1s;
    -webkit-transition: all .4s cubic-bezier(.35,.75,.55,1) .1s;
    -moz-transition: all .4s cubic-bezier(.35,.75,.55,1) .1s;
    left: 0;
    top: 0;
    z-index: 999;
  }
  .b_pic.ac{
    transform: scale(1);
  }
  .b_pic img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: inline-block;
    height: 100%;
  }
  .about-us {
  }
  .about-us .top-menu {
    margin-top: 65px;
    background: url("./about-us.jpg") center;
    height: 330px;
  }
  .about-us .top-menu .top-menu-location {
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
  .about-us .el-tabs__nav {
    margin: 16px 0;
    text-align: center;
    width: 1280px;
  }
  .about-us .el-tabs__nav-wrap::after {
    background-color: #fff;
  }
  .about-us .el-tabs__item.is-active {
    color: #fff;
    background-color: #D86614;
    border-radius: 7px;
  }
  .about-us .el-tabs__item:hover {
    cursor: pointer;
    color: #D86614;
  }
  .about-us .el-tabs__active-bar {
    background-color:#fff;
    }
  .about-us .el-tabs__item.is-active:hover {
    color: #fff;
  }
  .about-us .el-tabs__item {
    padding: 0 15px;
    margin: 5px 20px;
    font-size: 16px;
  }
  .about-us .tabs {
    width: 1280px;
    margin: 0px auto;
  }
  .about-us .tabs .el-row {
    background-color: #F2F2F2;
    padding: 60px 67px;
  }
  .about-us .left-bar {
    padding-right: 22px;
  }
  .about-us .left-bar p {
    line-height: 36px;
    font-size: 14px;
  }
  .about-us .right {
    width: 276.14px;
    .right-content{
      background-color: #fff;
      line-height: 34px;
      text-align: center;
      border-radius: 6px;
      color: #d86614;
      font-weight: bold;
    }
  }
  .about-us .right img {
    height: 230px;
    margin-bottom: 10px;
  }
  .about-us {
    .certificate {
      width: 259px;
      height: 230px;
      background: #fff;
      margin: 0 19px 19px 0;
      border: 1px solid #ddddde;
      transition: all .4s ease 0s;
      cursor: pointer;
      .el-col-6 {
        margin-bottom: 14px;
      }
      .content-cation-img {
        float: left;
        padding: 5px;
        width: 265px;
        height: 167px;
        text-align: center;
      }
      .content-cation-img2 {
        display: none;
        position: relative;
        top: 2px;
        left: 1px;
        width: 256px;
        height: 167px;
        background: #1b4c7d;
        opacity: 0.7;
        background: url(./magnifying.png) no-repeat;
      }
      .content-cation-js {
        float: left;
        width: 265px;
        text-align: center;
        font-size: 12px;
      }
      img {
          height: 172px;
      }
      &:hover {
        box-shadow: 0px 3px 4px #ccc;
      }
      &:hover .content-cation-img2 {
        display: block;
      }
    }
    .organizational {
      margin: 50px 0;
      img {
        width: 1280px;
      }
    }
  }
</style>
