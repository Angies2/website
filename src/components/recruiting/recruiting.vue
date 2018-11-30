<template>
  <div class="recruiting">
    <div class="top-menu">
      <div class="top-menu-location">
        <span>您现在的位置：首页>招贤纳士>{{activeName}}</span>
      </div>
    </div>
    <div class="tabs">
      <el-tabs v-model="activeName">
        <el-tab-pane label="社会招聘" name="社会招聘">
          <label slot="label">&nbsp;&nbsp;&nbsp;社会招聘</label>
          <div class="detailInner">
            <div class="list-items">
              <h4 class="h4title">项目经理</h4>
              <p class="time">岗位职责</p>
              <li>1、贯彻执行国家有关的法律、法规和上级主管部门下发的政策性文件</li>
              <li>2、履行项目部管理工作，对项目实施进行全过程的全面动态管理</li>
              <li>3、负责项目部团队建设，培养团队精神，形成和谐一致，高效运行的项目团队</li>
              <li>4、定期评估团队运行绩效，有效发挥和调动团队员工的工作积极性和责任感，提高团队的工作效率</li>
              <li>5、根据承包合同与相关文件主持编制项目管理实施规划，并对项目成本控制目标、风险控制目标、质量目标、安全文明施工目标、工期目标进行系统管理</li>
              <li>6、负责制定项目部各项管理规章制度、考核制度、奖惩制度</li>
              <li>7、根据项目管理目标计划进行目标分解与责任划分，确定各职能部门与人员职责、分工和权限</li>
              <li>8、建立畅通的信息沟通渠道和参建各方共享的信息工作平台，保证信息准确、及时和有效的传递</li>
              <li>9、沟通协调好项目内部成员之间的关系与外部之间的关系，为项目实施创造良好的工作环境</li>
              <p class="time">任职要求</p>
              <li>1、本科以上学历，道路桥梁、土木工程、工程管理、建筑等相关专业</li>
              <li>2、5年及以上工程项目管理经验</li>
              <li>3、具有高级职称，持有一级建造师、注册监理工程师、注册造价工程师优先</li>
              <li>4、具有项目管理、设计管理、成本管理、施工管理、安全质量管理、合同管理能力</li>
              <li>5、熟悉房建、市政工程现行施工技术措施</li>
              <li>6、熟悉工程项目建设流程。</li>
            </div>
            <div class="list-items">
              <h4 class="h4title">技术主管</h4>
              <p class="time">岗位职责</p>
              <li>1、熟悉国家相关设计规范及技术要求，负责项目设计进度及设计质量的协调、审查，参与项目各专业及施工图会审，参与各项目的技术交底</li>
              <li>2、负责与设计单位协调沟通，技术交流工作</li>
              <li>3、负责新技术、新产品、新材料、新工艺的运用推广</li>
              <li>4、负责项目施工方案的技术审查</li>
              <li>5、负责与政府相关部门的技术协调沟通工作</li>
              <li>6、负责项目各专业技术衔接、分析及会审工作。</li>
              <p class="time">任职要求</p>
              <li>1、本科以上学历，结构、土木工程、建筑等相关专业</li>
              <li>2、8年以上施工技术管理经验</li>
              <li>3、具有中级以上职称</li>
              <li>4、持有一级建造师、注册监理工程师、注册造价工程师等优先</li>
              <li>5、具有结构设计经验，具备审查结构图纸的能力</li>
              <li>6、熟悉房建、市政工程现行施工技术措施及施工方案的编审，熟悉现行施工相关技术规范、规程。</li>
            </div>
            <div class="list-items">
              <h4 class="h4title">土建工程师</h4>
              <p class="time">岗位职责</p>
              <li>1、贯彻执行适合本项目的法律、法规、技术标准、规范、规程及上级主管部门下发的政策性文件</li>
              <li>2、掌握施工规范、操作规程、工程验收评定标准</li>
              <li>3、熟悉施工和设计要求，能够独立提出读图纪要，参与设计交底和设计会审、设计变更</li>
              <li>4、督促和检查施工组织设计、各类专项施工方案的实施效果</li>
              <li>5、复核施工过程、特殊过程、关键工序施工质量，并留下相应的影像资料</li>
              <li>6、编制工程周、月、季度形象进度计划和总体形象进度计划，建立相应的进度计划台账</li>
              <li>7、复核施工测量放线，轴线标高，参加隐蔽工程验收，分部分项工程验收，工程竣工验收</li>
              <li>8、做好施工日志记录，周汇报资料、月度汇报资料</li>
              <li>9、完成项目部领导交办的临时性工作。</li>
              <p class="time">任职要求</p>
              <li>1、本科以上学历，道路桥梁、土木工程、工程管理、建筑等相关专业</li>
              <li>2、3年以上施工技术管理经验</li>
              <li>3、具有初级以上职称</li>
              <li>4、持有一级建造师、注册监理工程师、注册造价工程师等优先</li>
              <li>5、具有专业知识、施工技术管理、安全质量管理、相关法律法规能力</li>
              <li>6、熟悉房建、市政工程现行施工技术措施及熟悉工程项目建设流程。</li>
            </div>
            <div class="list-items">
              <h4 class="h4title">安装工程师</h4>
              <p class="time">岗位职责</p>
              <li>1、贯彻执行适合本项目的法律、法规、技术标准、规范、规程及上级主管部门下发的政策性文件</li>
              <li>2、参与安装工程资料、文件的审查和评标工作，提出合理建议，负责对投标单位进行安装方面的现场答疑</li>
              <li>3、参与图纸会审、设计交底工作，负责交底记录整理、签认和发放。跟踪处理图纸会审中提出的问题</li>
              <li>4、审查并监督检查《水、暖、强弱电施工组织设计/方案》和《施工监理规划》的实施</li>
              <li>5、负责审查安装工程相关各单位提出的安装工程变更要求</li>
              <li>6、根据相关规范标准对安装工程施工质量进行控制，对承包单位与监理单位的质量完成情况进行检查考核并提出调整意见</li>
              <li>7、根据工程施工计划对安装工程的进度进行监督、检查，并根据情况提出调整意见</li>
              <li>8、负责对安装施工材料、工程机械及施工队伍的质量进行检查</li>
              <li>9、对安装工程中出现的不合格事项进行检查，并提出处理意见</li>
              <li>10、负责安装工程的竣工验收。</li>
              <p class="time">任职要求</p>
              <li>1、本科以上学历，电气、暖通、排水、建筑等相关专业</li>
              <li>2、3年以上安装技术管理经验</li>
              <li>3、具有初级以上职称</li>
              <li>4、持有一级建造师、注册监理工程师、注册造价工程师等优先</li>
              <li>5、具有专业知识、施工技术管理、安全质量管理、相关法律法规能力</li>
              <li>6、熟悉房建、市政工程现行施工技术措施及熟悉工程项目建设流程。</li>
            </div>
            <p>应聘者请将个人简历发邮件至招聘邮箱
              <a href="mailto:etech_hrd@tylin.com.cn">etech_hrd@tylin.com.cn</a>
              ，为确保应聘资料的准确收集，请在邮件标题中标注"姓名+应聘职位"；当我们收到您的资料后，会在1-2周内与您联系，
              如未与您联系，证明您的资料已进入我们的人才储备库，当我们的岗位需要时，会再与您取得联系。
            </p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="校园招聘" name="校园招聘">
          <label slot="label">&nbsp;校园招聘&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <div class="detailInner list-two">
            <div class="list-items">
              <div class="detail-title">实现自我价值与能力提升的新领地</div>
              <li>1、与大师同行，跟随传奇，挑战传奇，成就传奇</li>
              <li>2、成为行业顶尖团队一员，全方位体现个人能力</li>
              <li>3、参与最前沿、最具影响力的项目，创造属于个人及团队的优秀产品</li>
              <li>4、极具竞争力的企业环境，加速职业能力提升</li>
            </div>
            <div class="list-items items-jobs">
              <p class="h4title">招聘岗位</p>
              <li>1、项目管理工程师</li>
              <li>2、研发工程师</li>
              <li>3、BIM工程师</li>
              <li>4、模型工程师</li>
              <li>5、图形工程师</li>
              <li>6、平台开发工程师</li>
              <li>7、BIM大数据软件工程师</li>
              <li>8、市场助理</li>
            </div>
            <div class="list-items">
              <p class="h4title">招聘需求</p>
              <li>建筑、 结构、土木、机电、 环境工程、项目管理、工程力学、 机械工程、信息工程、智能科学、 软件工程、计算机</li>
            </div>
            <div class="list-items">
              <p class="h4title">个人素质</p>
              <li>1、具有良好的学习能力、沟通协调能力（担任社团领导的人员优先）;</li>
              <li>2、 硕士研究生毕业（优秀毕业生可放宽至本科学历），博士更佳，英语熟练掌握运用，具有留学背景或国内外相关BIM学习经历的优先考虑</li>
              <li>3、所有岗位同时接受实习生，2020届、2021届毕业的硕士、博士（可长期实习者优先）。</li>
            </div>
            <p>应聘者请将个人简历发邮件至招聘邮箱
              <a href="mailto:etech_hrd@tylin.com.cn">etech_hrd@tylin.com.cn</a>
              ，为确保应聘资料的准确收集，请在邮件标题中标注"姓名+应聘职位"；当我们收到您的资料后，会在1-2周内与您联系，
              如未与您联系，证明您的资料已进入我们的人才储备库，当我们的岗位需要时，会再与您取得联系。
            </p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
    export default {
        name: "recruiting",
      data() {
        return {
          activeName: '社会招聘'
        };
      },
      mounted() {

      },
    }
</script>

<style  lang="less">
  .recruiting .top-menu {
    margin-top: 65px;
    background: url("./recruiting.jpg") center;
    height: 330px;
  }
  .recruiting .top-menu .top-menu-location {
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
  .recruiting .el-tabs__nav {
    margin: 16px 0;
    text-align: center;
    width: 1280px;
  }
  .recruiting .el-tabs__nav-wrap::after {
    background-color: #fff;
  }
  .recruiting .el-tabs__item.is-active {
    color: #fff;
    background-color: #D86614;
    border-radius: 7px;
  }
  .recruiting .el-tabs__item:hover {
    cursor: pointer;
    color: #D86614;
  }
  .recruiting .el-tabs__active-bar {
    background-color:#fff;
  }
  .recruiting .el-tabs__item.is-active:hover {
    color: #fff;
  }
  .recruiting .el-tabs__item {
    padding: 0 15px;
    margin: 5px 20px;
    font-size: 16px;
  }
  .recruiting .tabs {
    width: 1280px;
    margin: 0px auto;
  }
  .recruiting {
    .detail-title {
      font-size: 16px;
      text-align: center;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .detailInner {
      background-color: #F2F2F2;
      padding: 60px 67px;
    }
    .h4title {
      padding-left: 10px;
      border-left: 3px solid #FF9955;
      color: #3f3f40;
      font-size: 15px;
      line-height: 18px;
      display: block;
    }
    .time {
      font-size: 14px;
      color: #3F3F40;
      line-height: 50px;
      margin-left: 25px;
    }
    li {
      font-size: 12px;
      color: rgb(140, 141, 144);
      line-height: 24px;
      text-align: justify;
      white-space: normal;
      list-style: none;
      margin-left: 25px;
    }
    .list-items {
      overflow: hidden;
      margin-bottom: 20px;
      border-bottom: 1px dotted #cccdd1;
      padding-bottom: 20px;
    }
    .list-two {
      .h4title {
        margin-bottom: 14px;
      }

    }
  }
</style>
