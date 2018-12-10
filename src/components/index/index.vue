<template>
  <div class="index-page" id="index-page">
    <el-carousel :autoplay="true" arrow="never"  ref="carousel">
      <el-carousel-item v-for="(item,index) in 3" :key="item">
        <div class="img-carousel">
          <img src="./pic05.jpg" v-if="index == 0" class="bannerImg" />
        </div><div class="img-carousel">
        <img src="./pic06.jpg"  v-if="index == 1" class="bannerImg" />
      </div>
        <div class="img-carousel">
          <img src="./pic7.jpg" v-if="index == 2" class="bannerImg" />
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="first-item">
      <div class="rolling-news scroll-wrap">
        <div  @click="previousNews"><img src="./left.png"/></div>
        <div  @click="nextNews"><img src="./right.png"/></div>
        <ul id="message_list" class="scroll-content" :style="{ top }">
          <li v-for="item in news">
            <span>{{item.message}}</span>
            <span class="first-item-date">{{item.date}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="second-item">
      <div class="fake-block"></div>
      <div class="project-list">
        <div class="list-bg">
          <div id="project-content">
            <div class="project-title"><b>项目展示</b><span class="project-en-name">&nbsp;&nbsp;Project Display</span></div>
            <el-tabs v-model="activeName"  tabPosition="right">
              <el-tab-pane label="01" name="first">
                <label slot="label">
                  <el-row>
                    <el-col :span="2">
                      <span>01</span>
                    </el-col>
                    <el-col :span="22">
                      <div class="font-fourteen font-ch">中国·云南 丨 昆明市综合交通国际枢纽</div>
                      <div class="font-ten font-en">YUNNAN , CHINA丨 KUNMING INTERANTIONAL INTEGRATED TRANSPORT HUB PROJECT</div>
                    </el-col>
                  </el-row>
                </label>
                <img src="./project-display.jpg"/>
              </el-tab-pane>
              <el-tab-pane label="02" name="second">
                <label slot="label">
                  <el-row>
                    <el-col :span="2">
                      <span>02</span>
                    </el-col>
                    <el-col :span="22">
                      <div class="font-fourteen font-ch">中国·重庆 丨 万开周家坝-浦里快速通道</div>
                      <div class="font-ten font-en">CHONGQING , CHINA丨 ZHOU DAM TO PULI HYPER CHANNEL IN WANZHOU AND KAIXIAN</div>
                    </el-col>
                  </el-row>
                </label>
                <img src="./zhoujiaba.jpg"/>
              </el-tab-pane>
              <el-tab-pane label="03" name="third">
                <label slot="label">
                  <el-row>
                    <el-col :span="2">
                      <span>03</span>
                    </el-col>
                    <el-col :span="22">
                      <div class="font-fourteen font-ch">中国·重庆 丨 重庆蔡家嘉陵江大桥</div>
                      <div class="font-ten font-en">CHONGQING , CHINA丨 CAI JIA JIALING RIVER BRIDGE</div>
                    </el-col>
                  </el-row>
                </label>
                <img src="./caijia.png"/>
              </el-tab-pane>
              <el-tab-pane label="04" name="fourth">
                <label slot="label">
                  <el-row>
                    <el-col :span="2">
                      <span>04</span>
                    </el-col>
                    <el-col :span="22">
                      <div class="font-fourteen font-ch">中国·昆明 丨 官渡区人民医院</div>
                        <div class="font-ten font-en">KUNMING , CHINA丨 GUANDU DISTRICT PEOPLE'S HOSPITAL OF KUNMING CITY</div>
                    </el-col>
                  </el-row>
                </label>
                <img src="./guandu.png"/>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
    <div class="third-item">
      <div class="project-list">
        <div class="list-bg">
          <router-link to="/news">
            <div class="project-title">
              <span class="project-en-name">&nbsp;&nbsp;News Information</span>
              <b class="project-ch-name">新闻资讯</b>
            </div>
          </router-link>
        <el-row :gutter="20" id="news-information">
          <el-col :span="12">
            <div class="left-news">
              <router-link to="/news">
              <div class="news-top-title">企业要闻&nbsp;&nbsp;Enterprise News</div>
              </router-link>
              <hr/>
              <div class="news-item">
                <el-row :gutter="20">
                  <el-col :span="3">
                    <div class="news-date-day">26</div>
                    <div class="news-date-mouth">2018-06</div>
                  </el-col>
                  <el-col :span="21">
                    <div class="news-title"   @click="toDetail('5bfdfcf97720ba5e606254cb')">公司董事长应邀为重庆市注册建筑师继续教育培训（2018年度）执讲</div>
                    <div class="news-content">林同棪国际工程咨询（中国）有限公司副总裁、林同棪（重庆）国际工程技术有限公司董事长汪洋应邀为重庆市注册建筑师作了《全过程工程咨询模式推进过程中的几个问题》专题培训讲座.....</div>
                  </el-col>
                </el-row>
              </div>
              <div class="news-item">
                <el-row :gutter="20">
                  <el-col :span="3">
                    <div class="news-date-day">17</div>
                    <div  class="news-date-mouth">2018-10</div>
                  </el-col>
                  <el-col :span="21">
                    <div class="news-title">林同棪（重庆）国际工程技术有限公司10月校园招聘圆满结束</div>
                    <div class="news-content">心随“棪”动，筑梦未来&nbsp;|&nbsp;又是一年招聘季，历时一个月1的校园招聘会，林同棪（重庆）国际工程技术陪你一同见证......</div>
                  </el-col>
                </el-row>
              </div>
              <hr/>
              <router-link to="/news"><span class="font-block">More...</span></router-link>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="right-news">
              <router-link to="/news">
              <div class="news-top-title">行业动态&nbsp;&nbsp;Industry Trends</div>
              </router-link>
              <hr/>
              <div class="news-item">
                <el-row :gutter="20">
                  <el-col :span="3">
                    <div class="news-date-day">30</div>
                    <div  class="news-date-mouth">2018-09</div>
                  </el-col>
                  <el-col :span="21">
                    <div class="news-title"  @click="toDetail('5bff545d0bced04168b12bb7')">你的BIM未必出类拔萃，但我能让你与众不同</div>
                    <div class="news-content">2018年，促进BIM发展的相关政策陆续被推出。国务院，国家发改委，住建部及地方各级政府陆续发文，提出要大力度地推进BIM技术应用。......</div>
                  </el-col>
                </el-row>
              </div>
              <div class="news-item">
                <el-row :gutter="20">
                  <el-col :span="3">
                    <div class="news-date-day">02</div>
                    <div  class="news-date-mouth">2018-11</div>
                  </el-col>
                  <el-col :span="21">
                    <div class="news-title">2018 BIM考试秘笈——2018冬季“BIM应用工程师考试”考前冲刺</div>
                    <div class="news-content">2018年即将过去，今年的小目标你实现了几个？经过一年的打拼，你自身的工作能力和专业水平是不是还在突飞猛进的提升中？相信每个人都会在一年的积累中收获颇深，每个人都有成长和进步，......</div>
                  </el-col>
                </el-row>
              </div>
              <hr/>
              <router-link to="/news"><span class="font-block">More...</span></router-link>
            </div>
          </el-col>
        </el-row>
      </div>
      </div>
    </div>
    <div class="fifth-item">
      <div class="fake-block"></div>
      <div id="about" class="about">
        <el-row id="about-content" class="about-content">
          <el-col :span="10">
            <div class="center-house">
              <img src="./house1.jpg"/>
            </div>
          </el-col>
          <div class="bg"></div>
          <el-col :span="14" class="left-content">
            <div>
              <router-link to="/about">
              <div class="title">
                <b class="about-title-ch">关于林同棪</b>
                <span  class="about-title-en">About Us</span>
              </div>
              </router-link>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;林同棪国际（TYLI）是世界著名工程咨询集团，在桥梁和交通基础设施领域处于世界领先水平,以创新精神、设计精良和成本效益合理而闻名于世。
                集团始建于1954年，总部设在美国旧金山，主要机构遍布美国、东南亚和中国等地。
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:"index",
    data() {
      return {
        activeName: 'first',
        news:[
          {message:'公司董事长应邀为重庆市注册建筑师继续教育培训（2018年度）执讲',date:'2018-06-26'},
          {message:'林同棪（重庆）国际工程技术有限公司2019年校招火热启动！',date:'2018-09-17'},
          {message:'你的BIM未必出类拔萃，但我能让你与众不同',date:'2018-09-30'},
          {message:'林同棪（重庆）国际工程技术有限公司10月校园招聘圆满结束',date:'2018-10-17'},
          {message:'2018 BIM考试秘笈——2018冬季“BIM应用工程师考试”考前冲刺',date:'2018-11-02'},
        ],
        activeIndex: 0
      };
    },
    computed: {
      top() {
        return - this.activeIndex * 50 + 'px';
      }
    },
    mounted(){
      setInterval(_ => {
        if(this.activeIndex < this.news.length) {
          this.activeIndex += 1;
        } else {
          this.activeIndex = 0;
        }
      }, 2000);
      $("#project-content").addClass("about-animation");//项目展示动画
      window.addEventListener('scroll', this.handleScroll)
    },
    created(){
    },
    destroyed(){
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods:{
      toDetail: function(num) {
        this.$router.push({path:"/news-detail", query: { newsId: num }})
      },
      previousNews (){
        if(this.activeIndex === 1){
          this.activeIndex = this.news.length;
        }else {
          this.activeIndex -= 1;
        }
      },
      nextNews (){
        if(this.activeIndex === this.news.length){
          this.activeIndex = 1;
        }else {
          this.activeIndex += 1;
        }
      },
      handleScroll () {
        let eTop=$('#about-content').offset().top;//关于我们距离整个页面顶部的距离
        let newTop = $('#news-information').offset().top;//新闻资讯距离整个页面顶部的距离

        let sTop = document.documentElement.scrollTop || document.body.scrollTop; //获取滚动距离
        let wTop=$(window).height();//绿色框可视区域的高度
        if(sTop > (eTop-wTop)){
          $("#about-content").addClass("about-animation");//联系我们动画
        }
        if(sTop > (newTop-wTop+100)){
          $("#news-information").addClass("about-animation");//新闻资讯动画
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .index-page {
    .font-ten {
      font-size: 9px !important;
    }
    margin-top: 65px;
    .scroll-wrap{
      height: 50px;
      overflow: hidden;
    }
    .scroll-content{
      position: relative;
      transition: top 0.5s;
        li {
          line-height: 50px;
          margin-left: 30px;
      }
    }
    .second-item,
    .third-item {
      width: 100%;
      background-color: #F2F2F2;
      padding-bottom: 23px;
      padding-top: 48px;
    }
    .first-item {
      width: 100%;
      height: 56px;
      margin: 0 auto;
      background-color: #F2F2F2;
    }
    .el-carousel {
      z-index: -9999;
      .el-carousel__container {
        height: 540px;
      }
    }
    .img-carousel img {
      width: 100%;
      height: 540px;
    }
    .rolling-news {
      background-color: #fff;
      width: 1280px;
      line-height: 56px;
      height: 56px;
      margin: 0 auto;
      ul {
        margin-left: 50px;
      }
      div {
        display: inline-block;
        width: 23px;
        cursor: pointer;
      }
    }
    .rolling-news img {
      height: 20px;
      margin: 3px 5px;
      vertical-align: middle;
    }
    .first-item-date {
      float: right;
      margin-right: 40px;
    }
    .project-list img {
      width: 275px;
    }
    .third-item .project-list {
      width: 1280px;
      margin: 0 auto;
      border-radius: 5px;
    }
    .second-item {
      #project-content {
        position: relative;
      }
      .fake-block {
        width: 800px;
        height: 501px;
        position: absolute;
        display: inline-block;
        background-color: #fff;
      }
      .project-list {
        width: 1280px;
        margin: 0 auto;
        height: 479px;
      }
      .project-title {
        font-size: 16px;
        height: 84px;
        background-color: #333;
        width: 344px;
        position: absolute;
        z-index: 999;
        left: 0;
        top:-37px;
        b {
          font-size: 16px;
          color: #fff;
          border-bottom: 1px solid #FF9955;
          width: 295px;
          margin: 10px 0 0 25px;
          display: inline-block;
          padding-bottom: 7px;
        }
        .project-en-name {
          font-size: 12px;
          color: #ccc;
          display: block;
          margin: 7px 0 0 17px;
        }
      }
      .list-bg {
        background-color: #fff;
        padding-top: 90px;
        padding-right: 50px;
      }
      .font-ch {
        line-height: 12px;
      }
      .font-en {
        display: inline-block;
        line-height: 11px;
      }
      img {
        width: 555px;
        position: absolute;
        height: 332px;
      }
      .el-tab-pane {
        position: relative;
        height: 411px;
      }
      .el-tabs__item.is-active {
        background-color: #FF9955;
        color: #fff;
        .font-en {
          color: #fff;
        }
      }
      .el-tabs--right .el-tabs__nav-wrap.is-right {
        margin-top: -16px;
      }
      .el-tabs__item:hover {
        background-color: #FF9955;
        color: #fff;
        .font-en {
          color: #fff;
        }
      }
      .el-tabs__item {
        height: 70px;
        width: 618px;
        padding-top: 16px;
        background-color: #F6F6F6;
        margin: 17px 0;
        .font-en {
          color: #FF9955;
        }
      }
      .el-tabs__active-bar {
        background-color: #fff;
        height: 800px !important;
        margin-top: -11px;
        position: absolute;
        top: -216px;
      }
    }
    .project-en-name {
      font-size: 9px;
      color: #ccc;
    }
    dd {
      text-align: center;
    }
    .third-item .list-bg {
      padding: 84px 16px 16px 19px;
    }
    .third-item {
      height: 755px;
      .project-title {
        margin: -3px 0 10px 0;
        text-align: center;
      }
      .project-en-name {
        font-weight: bold;
        font-size: 28px;
        color: #fff;
        display: block;
        margin-bottom: 26px;
      }
      .project-ch-name {
        font-weight: bold;
        font-size: 18px;
        color: #333;
        display: block;
      }
      .left-news,
      .right-news {
        margin-top: 48px;
      }
      .news-top-title {
        text-align: center;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        font-weight: bold;
      }
      .news-content {
        font-size: 12px;
        color: #666;
        line-height: 30px;
      }
      .news-date-day {
        font-size: 36px;
        text-align: center;
        border-bottom: 1px solid #333;
        color: #FF9955;
      }
      .news-date-mouth {
        font-size: 14px;
        font-weight: bold;
      }
      .news-title {
        font-size: 14px;
        font-weight: bold;
        line-height: 33px;
        cursor: pointer;
      }
      .news-item {
        margin-top: 53px;
        .el-col-21 {
          margin-bottom: 31px;
        }
      }
      .font-block {
        font-size: 12px;
        display: inline-block;
        float: right;
        margin-top: 36px;
      }
    }

   .fifth-item {
     margin: 0 auto;
     width: 100%;
     background-color: #F2F2F2;
     height: 598px;
     position: relative;
     .bg {
       position: absolute;
       width: 260px;
       height: 262px;
       background: #F2F2F2;
       left: 500px;
       z-index: -999;
     }
     .fake-block {
       width: 500px;
       height: 489px;
       position: absolute;
       display: inline-block;
       background-color: #fff;
       bottom: 109px;
       right: 0;
     }
  }
  .fifth-item .about {
    width: 1171px;
    margin: 0 auto;
    background-color: #fff;
    height: 271px;
    font-size: 15px;
    padding: 109px 0 109px 109px;
    p{
      line-height: 43px;
    }
  }
    .about-animation {
      animation: donghua 3s forwards;
    }
    @keyframes donghua{
      0%{
        transform: translate(0,100px);
      }
      100%{
        transform: translate(0,0px);
      }
    }
   .fifth-item .about .left-content {
    padding-left: 33px !important;
  }
   .fifth-item .center-house img {
     width: 500px;
     height: 262px ;
  }
   .fifth-item .about .title {
     text-align: right;
     .about-title-ch {
       font-weight: bold;
       font-size: 18px;
       line-height: 20px;
     }
     .about-title-en {
       font-weight: bold;
       font-size: 32px;
       display: block;
       line-height: 76px;
     }
  }
  .index-page .fifth-item .about p {
    line-height: 28px;
    color: #8B8B8B;
    font-size: 14px;
  }
  .font-orange {
    color: #E08442;
    font-weight: bold;
    font-size: 14px;
  }
  }
</style>
