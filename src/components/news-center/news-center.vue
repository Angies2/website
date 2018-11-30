<template>
    <div class="news-center">
      <div class="top-menu">
        <div class="top-menu-location">
          <span>您现在的位置：首页>新闻动态>{{activeName}}</span>
        </div>
      </div>
      <div class="tabs">
        <el-tabs v-model="activeName">
          <el-tab-pane label="企业动态" name="企业动态">
            <label slot="label">&nbsp;&nbsp;&nbsp;企业动态</label>
            <ul>
                <li @click="toDetail('5bfdfcf97720ba5e606254cb')">
                  <el-row :gutter="60">
                    <el-col :span="6">
                      <img src="./6-26.jpg"/>
                    </el-col>
                    <el-col :span="18">
                      <div>
                        <div class="news-title">公司董事长应邀为重庆市注册建筑师继续教育培训（2018年度）执讲</div>
                        <div class="news-content">林同棪国际工程咨询（中国）有限公司副总裁、林同棪（重庆）国际工程技术有限公司董事长汪洋应邀为重庆市注册建筑师作了《全过程工程咨询模式推进过程中的几个问题》专题培训讲座，本次培训由重庆市城乡建设委员会和重庆市勘察设计协会主办。......</div>
                        <div class="news-bottom">
                          <span class="news-date">2018年6月26日</span>
                          <span class="news-more">了解更多</span>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </li>
                <li @click="toDetail('5bff52af0bced04168b12bb5')">
                  <el-row :gutter="60">
                    <el-col :span="6">
                      <img src="./9-17.jpeg"/>
                    </el-col>
                    <el-col :span="18">
                      <div>
                        <div class="news-title">林同棪（重庆）国际工程技术有限公司2019年校招火热启动！</div>
                        <div class="news-content">林同棪(重庆)国际工程技术有限公司2019校园招聘已启动，应届生成就梦想的重要机会。即将走出校门的你，对未来充满着向往， .......</div>
                        <div class="news-bottom">
                          <span class="news-date">2018年9月17日</span>
                          <span class="news-more">了解更多</span>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </li>
                <li @click="toDetail('5bff545d0bced04168b12bb7')">
                  <el-row :gutter="60">
                    <el-col :span="6">
                      <img src="./9-30.png"/>
                    </el-col>
                    <el-col :span="18">
                      <div>
                        <div class="news-title">你的BIM未必出类拔萃，但我能让你与众不同</div>
                        <div class="news-content">2018年，促进BIM发展的相关政策陆续被推出。国务院，国家发改委，住建部及地方各级政府陆续发文，提出要大力度地推进BIM技术应用。......</div>
                        <div class="news-bottom">
                          <span class="news-date">2018年9月30日</span>
                          <span class="news-more">了解更多</span>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </li>
                <li>
                  <el-row :gutter="60">
                    <el-col :span="6">
                      <img src="./10-17.jpg"/>
                    </el-col>
                    <el-col :span="18">
                      <div>
                        <div class="news-title">林同棪（重庆）国际工程技术有限公司10月校园招聘圆满结束</div>
                        <div class="news-content">2018年全国BIM应用工程师考试报名倒计时！2018即将过去，今年的目标你实现了几个？经过一年的打拼，你的工作能力和专业水平是否还在突飞猛进.......</div>
                        <div class="news-bottom">
                          <span class="news-date">2018年10月17日</span>
                          <span class="news-more">了解更多</span>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </li>
                <li>
                  <el-row :gutter="60">
                    <el-col :span="6">
                      <img src="./11-2.png"/>
                    </el-col>
                    <el-col :span="18">
                      <div>
                        <div class="news-title">2018 BIM考试秘笈——2018冬季“BIM应用工程师考试”考前冲刺</div>
                        <div class="news-content">2018年即将过去，今年的小目标你实现了几个？经过一年的打拼，你自身的工作能力和专业水平是不是还在突飞猛进的提升中？相信每个人都会在一年的积累中收获颇深，每个人都有成长和进步，但是如何在工作岗位中脱颖而出......</div>
                        <div class="news-bottom">
                          <span class="news-date">2018年11月2日</span>
                          <span class="news-more">了解更多</span>
                        </div>
                      </div>
                    </el-col>
                  </el-row>
                </li>
              </ul>
          </el-tab-pane>
          <el-tab-pane label="行业要闻" name="行业要闻">
            <label slot="label">&nbsp;行业要闻&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <ul>
              <li @click="toDetail('5bfdfcf97720ba5e606254cb')">
                <el-row :gutter="60">
                  <el-col :span="6">
                    <img src="./6-26.jpg"/>
                  </el-col>
                  <el-col :span="18">
                    <div>
                      <div class="news-title">公司董事长应邀为重庆市注册建筑师继续教育培训（2018年度）执讲</div>
                      <div class="news-content">林同棪国际工程咨询（中国）有限公司副总裁、林同棪（重庆）国际工程技术有限公司董事长汪洋应邀为重庆市注册建筑师作了《全过程工程咨询模式推进过程中的几个问题》专题培训讲座，本次培训由重庆市城乡建设委员会和重庆市勘察设计协会主办。......</div>
                      <div class="news-bottom">
                        <span class="news-date">2018年6月26日</span>
                        <span class="news-more">了解更多</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li  @click="toDetail('5bff52af0bced04168b12bb5')">
                <el-row :gutter="60">
                  <el-col :span="6">
                    <img src="./9-17.jpeg"/>
                  </el-col>
                  <el-col :span="18">
                    <div>
                      <div class="news-title">林同棪（重庆）国际工程技术有限公司2019年校招火热启动！</div>
                      <div class="news-content">林同棪(重庆)国际工程技术有限公司2019校园招聘已启动，应届生成就梦想的重要机会。即将走出校门的你，对未来充满着向往， .......</div>
                      <div class="news-bottom">
                        <span class="news-date">2018年9月17日</span>
                        <span class="news-more">了解更多</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li  @click="toDetail('5bff545d0bced04168b12bb7')">
                <el-row :gutter="60">
                  <el-col :span="6">
                    <img src="./9-30.png"/>
                  </el-col>
                  <el-col :span="18">
                    <div>
                      <div class="news-title">你的BIM未必出类拔萃，但我能让你与众不同</div>
                      <div class="news-content">2018年，促进BIM发展的相关政策陆续被推出。国务院，国家发改委，住建部及地方各级政府陆续发文，提出要大力度地推进BIM技术应用。......</div>
                      <div class="news-bottom">
                        <span class="news-date">2018年9月30日</span>
                        <span class="news-more">了解更多</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row :gutter="60">
                  <el-col :span="6">
                    <img src="./10-17.jpg"/>
                  </el-col>
                  <el-col :span="18">
                    <div>
                      <div class="news-title">林同棪（重庆）国际工程技术有限公司10月校园招聘圆满结束</div>
                      <div class="news-content">2018年全国BIM应用工程师考试报名倒计时！2018即将过去，今年的目标你实现了几个？经过一年的打拼，你的工作能力和专业水平是否还在突飞猛进.......</div>
                      <div class="news-bottom">
                        <span class="news-date">2018年10月17日</span>
                        <span class="news-more">了解更多</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row :gutter="60">
                  <el-col :span="6">
                    <img src="./11-2.png"/>
                  </el-col>
                  <el-col :span="18">
                    <div>
                      <div class="news-title">2018 BIM考试秘笈——2018冬季“BIM应用工程师考试”考前冲刺</div>
                      <div class="news-content">2018年即将过去，今年的小目标你实现了几个？经过一年的打拼，你自身的工作能力和专业水平是不是还在突飞猛进的提升中？相信每个人都会在一年的积累中收获颇深，每个人都有成长和进步，但是如何在工作岗位中脱颖而出......</div>
                      <div class="news-bottom">
                        <span class="news-date">2018年11月2日</span>
                        <span class="news-more">了解更多</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
    export default {
        name: "news-center",
      data() {
        return {
          activeName: '企业动态'
        };
      },
      mounted() {

      },
      methods: {
        toDetail: function(num) {
          this.$router.push({path:"/news-detail", query: { newsId: num }})
        }
      }
    }
</script>

<style  lang="less">
  .news-center .top-menu {
    margin-top: 65px;
    background: url("./news.jpg") center;
    height: 330px;
  }
  .news-center .top-menu .top-menu-location {
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
  .news-center .el-tabs__nav {
    margin: 16px 0;
    text-align: center;
    width: 1280px;
  }
  .news-center .el-tabs__nav-wrap::after {
    background-color: #fff;
  }
  .news-center .el-tabs__item.is-active {
    color: #fff;
    background-color: #D86614;
    border-radius: 7px;
  }
  .news-center .el-tabs__item:hover {
    cursor: pointer;
    color: #D86614;
  }
  .news-center .el-tabs__active-bar {
    background-color:#fff;
  }
  .news-center .el-tabs__item.is-active:hover {
    color: #fff;
  }
  .news-center .el-tabs__item {
    padding: 0 15px;
    margin: 5px 20px;
    font-size: 16px;
  }
  .news-center .tabs {
    width: 1280px;
    margin: 0px auto;
    ul {
      border: 1px #F2F2F2 solid;
      padding: 8px 30px 50px 30px;
      li{
        cursor: pointer;
        border-bottom: 1px #e0dede solid;
        padding: 30px 13px;
        img {
          width: 259px;
        }
        .news-title {
          line-height: 60px;
          font-size: 16px;
          font-weight: bold;
          margin-top: -23px;
        }
        .news-content {
          font-size: 14px;
          line-height: 35px;
        }
        .news-bottom {
          font-size: 14px;
          margin-top: 14px;
          .news-date {

          }
          .news-more {
            float: right;
          }
        }
      }
    }
  }
</style>
