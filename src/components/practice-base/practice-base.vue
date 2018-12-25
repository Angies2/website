<template>
    <div class="practice-base">
      <div class="top-menu">
        <div class="top-menu-location">
          <span>您现在的位置：<router-link to="/" >首页</router-link>>BIM实训基地>{{activeName}}</span>
        </div>
      </div>
      <div class="tabs">
        <el-tabs v-model="activeName">
          <el-tab-pane label="基地介绍" name="基地介绍">
            <label slot="label">&nbsp;&nbsp;&nbsp;&nbsp;基地介绍</label>
            <div class="introduced">
              <p>&nbsp;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为贯彻落实《中共中央、国务院关于进一步加强人才工作的决定》、《高技能人才队伍建设中长期规划（2010-2020年）》和《2011-2015年建筑业信息化发展纲要》，
                支撑国家战略和推动产业由大变强，建立健全的行业人才专业技术技能评价标准，加快培养一支结构合理、素质优良的行业技术技能人才队伍，
                我司积极响应工信部教育与考试中心文件《工信教【2017】85号：工业和信息化部教育与考试中心关于成立BIM专业技术技能项目中心的通知》的号召，
                凭借丰富的BIM项目经验和强大的实力，成为工业和信息化部教育与考试中心BIM专业技术技能项目中心实训基地，承担相关的报名、培训及考试工作。
              </p>
              <h3>权威授权</h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;林同棪BIM专业技术技能实训基地由工信部教育与考试中心审批，审批通过后，由工信部教育与考试中心直接授权铜牌，签署基地合同，授予基地编号；
                实训基地相关信息可在工信部教育与考试中心官网查询。</p>
              <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工信部教育与考试中心官网： http://www.ceiaecbim.cn/</p>
              <p>“工业和信息化部教育与考试中心是经中央机构编制委员会办公室批准设置的事业单位，一直致力于工业和信息化领域各行业发展的人才支撑服务，年培养选拔工业和信息化领域技术技能人才100万人次，是最具权威性的单位”。</p>
              <h3>强大师资</h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;林同棪BIM专业技术技能实训基地的授课讲师，除了具有丰富的BIM培训经验以及BIM应用实战经验，均取得工信部教育与考试中心认证的教师资格证书。师资队伍近年来参与项目屡次获得国家级及省部级BIM相关奖项，项目业主评价极高。</p>
              <h3>专业培训与考试</h3>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;林同棪（重庆）国际工程技术有限公司作为全国17家“BIM专业技术技能实训基地”单位之一，负责重庆BIM初、中级考试的考务及培训工作。
                林同棪BIM专业技术技能实训基地按照《建筑信息模型（BIM）专业技术技能标准》组织本地区培训考试，考试采用在线网络考试，所用的平台为工信部教育与考试中心官方的唯一考试平台。考试通过后的考生获得工信部教育与考试中心颁发的证书，纳入工信部教育与考试中心建立的全国BIM专业技术技能人才数据库。
              </p>
              <div class="img-introduction">
                <img src="./introduction01.png">
              </div>
              <h3>BIM专业技术技能证书</h3>
              <div class="img-introduction">
                <img src="./introduction02.jpg">
              </div>
              <div class="img-introduction">
                <img src="./introduction03.jpg">
              </div>
              <div class="certificate-center">专业技术技能证书样本</div>
              <h3>BIM证书的价值</h3>
              <h4>&nbsp;&nbsp;工程项目招投标加分项</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全国各地从政府建设主管机关到各企业，均逐渐重视BIM的应用和投入，国内大型工程项目招投标也把BIM技能证书作为基本投标条件或加分项之一。</p>
              <div class="img-introduction">
                <img src="./introduction04.jpg">
              </div>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如上图所示，上海市某管委会招标文件中明确指出：持有工业和信息化部教育与考试中心《专业技术技能证书》的项目咨询服务人员，每个得0.5分。</p>
              <h4>&nbsp;&nbsp;提高个人实力</h4>
              <p><b>学生：</b>获得BIM专业技能证书，增加个人履历能更适应招聘公司的需求，增大应聘机率。</p>
              <p><b>工程师：</b>2018年，市场上BIM工程师紧缺，工程师升职加薪必备证书。</p>
              <p><b>普通职员：</b>丰富个人简历，提高自身竞争力和个人信心，更受 雇主青睐。</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="权威授权牌" name="权威授权牌">
            <label slot="label">权威授权牌</label>
            <el-row :gutter="60" class="authorization">
              <el-col :span="12" class="left-authorization">
                <img src="./authorization01.jpg"/>
              </el-col>
              <el-col :span="12">
                <img src="./authorization02.jpg"/>
              </el-col>
            </el-row>
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
            <div class="live-practice">
              <p>&nbsp;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2018年5月19日，林同棪BIM专业技术技能实训基地首期培训正式开始。从建筑业信息化的发展到BIM的基本概念，特征及BIM在建筑工程中的重要性;从工程项目生命周期各个阶段BIM的应用到BIM在国际建筑行业和环境中的地位; 从简单BIM模型的搭建到BIM项目经典案例分析。这些与BIM相关的专业知识，在林同棪实训基地的培训课上，老师给学员们做着透彻的分析和讲解。</p>
              <p>&nbsp;</p>
              <div class="live">
                <img src="./live01.jpg"/>
                <img src="./live02.jpg"/>
                <img src="./live03.jpg"/>
              </div>
              <div class="p-distance">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;培训的内容主要围绕，前沿BIM理论知识及BIM概念深度刨析，当前BIM领域现状及BIM建设中的常见误区分析，大型BIM项目展示，BIM软件（Revit软件）的具体操作指导等。</p>
              </div>
              <div class="live">
                <img src="./live04.jpg"/>
                <img src="./live05.jpg"/>
              </div>
              <p  class="font-bind"><b>丰富的授课模式:</b></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;采用线上授课和答疑：林同棪BIM实训基地的授课教师团队，在培训课时以外还为学员们精心准备了线上课程，通过课程直播，带着学员走进BIM软件-Revit的世界，“手把手”教授学员Revit软件的基础操作；培训老师通过线上答疑的方式，细心解答学员们在学习中遇到的各种疑惑。</p>
              <p  class="font-bind"><b>考前模拟:</b></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;培训接近尾声，实训基地工作人员和培训老师们将组织《建筑信息模型（BIM）应用工程师》模拟考试，让学员们熟悉考试流程，提前感受考试题型，争取顺利考取BIM专业技术技能证书。</p>
              <div class="live">
                <img src="./live06.jpg"/>
              </div>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;林同棪BIM实训基地是在“专心，细心，用心”的关注每一位学员，真诚的希望学员们能够在基地学到知识，结下友谊，并让每位学员的BIM专业知识始终保持在时代前沿。</p>
            </div>
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
        background-color: #6a6b6da6;
        padding: 5px;
        border-radius: 3px;
      }
      a {
        color: #fff;
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
        padding: 0 60px;
        p {
          line-height: 40px;
        }
        h3 {
          margin: 13px 0;
          border-left: 3px solid #FF9955;
          padding-left: 5px;
        }
        h4 {
          color: #FF9955;
        }
        .img-introduction {
          text-align: center;
        }
        .certificate-center {
          text-align: center;
        }
      }
    }
    .el-tabs__content {
      border: 1px solid #ccc;
      padding: 20px 20px 0 20px;
    }
    .authorization {
      img {
        width: 477px;
      }
      margin: 40px 0;
      .left-authorization {
        img {
          margin-left: 95px;
        }
      }
    }
    .live-practice {
      margin-bottom: 40px;
      padding: 0 60px;
      p {
        line-height: 40px;
      }
      .live {
        text-align: center;
        img {
          width: 716px;
        }
      }
    }
    .p-distance {
      margin: 20px 0;
    }
    .font-bind {
      font-size: 15px;
    }
  }
</style>
