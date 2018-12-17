<template>
  <div class="index-page" id="index-page">
    <el-carousel :autoplay="true" arrow="never"  ref="carousel">
      <el-carousel-item v-for="(item,index) in 3" :key="item">
        <div class="img-carousel">
          <img src="./pic06.jpg" v-if="index == 0" class="bannerImg" />
        </div><div class="img-carousel">
        <img src="./10.jpg"  v-if="index == 1" class="bannerImg" />
      </div>
        <div class="img-carousel">
          <img src="./pic12.jpg" v-if="index == 2" class="bannerImg" />
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="first-item">
      <div class="rolling-news scroll-wrap">
        <div  @click="previousNews"><img src="./left.png"/></div>
        <div  @click="nextNews"><img src="./right.png"/></div>
        <ul id="message_list" class="scroll-content" :style="{ top }">
          <li v-for="item in news" @click="toDetail(item.id)">
            <span>{{item.title}}</span>
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
            <div class="project-title"><router-link to="/business"><b>项目展示</b><span class="project-en-name">&nbsp;&nbsp;Project Display</span></router-link></div>
            <el-tabs v-model="activeName"  tabPosition="right">
              <el-tab-pane label="01" name="first">
                <label slot="label">
                  <el-row>
                    <el-col :span="2">
                      <span>01</span>
                    </el-col>
                    <el-col :span="22">
                      <div class="font-fourteen font-ch">中国·云南 丨 昆明市综合交通国际枢纽</div>
                      <div class="font-ten font-en">Yunnan , China丨 Kunming Interantional  Integrated Transport Hub project</div>
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
                      <div class="font-ten font-en">Chongqing , China丨 Zhou Dam to Puli Hyper  Channel in Wanzhou and Kaizhou</div>
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
                      <div class="font-ten font-en">Chongqing , China丨 Cai Jia Jialing  River Bridge</div>
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
                        <div class="font-ten font-en">Kunming , China丨 Guandu District  People's Hospital of Kunming City</div>
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
              <div class="news-item" v-for=" item in companyList">
                <el-row :gutter="20">
                  <el-col :span="3">
                    <div class="news-date-day">{{item.date.match(/月(\S*)日/)[1]}}</div>
                    <div  class="news-date-mouth">{{item.date.match(/(\S*)年/)[1]}}-{{item.date.match(/年(\S*)月/)[1]}}</div>
                  </el-col>
                  <el-col :span="21">
                    <div class="news-title"  @click="toIndustryDetail(item.id)">{{item.title}}</div>
                    <div class="news-content">{{item.abstract}}......</div>
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
              <div class="news-item" v-for=" item in industList">
                <el-row :gutter="20">
                  <el-col :span="3">
                    <div class="news-date-day">{{item.date.match(/月(\S*)日/)[1]}}</div>
                    <div  class="news-date-mouth">{{item.date.match(/(\S*)年/)[1]}}-{{item.date.match(/年(\S*)月/)[1]}}</div>
                  </el-col>
                  <el-col :span="21">
                    <div class="news-title"><a target="_blank" :href="item.link">{{item.title}}</a></div>
                    <div class="news-content">{{item.abstract}}......</div>
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
          {id:'5c107b34e36ce7ae80880c20',title:'公司董事长应邀为重庆市注册建筑师继续教育培训（2018年度）执讲',date:'2018-06-26'},
        ],
        activeIndex: 0,
        companyList:[],
        industList:[]
      };
    },
    computed: {
      top() {
        return - this.activeIndex * 50 + 'px';
      }
    },
    mounted(){
      var _this = this;
      this.$http.get("/api/contents?type=enterprise&deleted=false&currentPage=1&pageSize=4").then(function(res){
        let msg = res.body;
        if(msg.code === 200){
          this.news = msg.contents;
        }else{
          _this.$message({
            message: msg.message,
            type: 'error',
            duration:2000
          });
        }
      });
      setInterval(_ => {
        if(this.activeIndex < this.news.length) {
          this.activeIndex += 1;
        } else {
          this.activeIndex = 0;
        }
      }, 2000);
      $("#project-content").addClass("about-animation");//项目展示动画
      window.addEventListener('scroll', this.handleScroll);
      this.handleEnterpriseList();
      this.handleIndustList();
    },
    created(){
    },
    destroyed(){
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods:{
      //企业要闻详情
      toDetail: function(num) {
        this.$router.push({path:"/news-detail", query: { newsId: num,activeName:'企业要闻' }})
      },
      //行业动态详情
      toIndustryDetail: function(num) {
          this.$router.push({path:"/news-detail", query: { newsId: num,activeName:'行业动态' }})
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
      },
      //企业动态
      handleEnterpriseList() {
        var _this = this;
        this.$http.get("/api/contents?type=enterprise&deleted=false&currentPage=1&pageSize=2").then(function(res){
          let msg = res.body;
          if(msg.code === 200){
            this.companyList = msg.contents;
          }else{
            _this.$message({
              message: msg.message,
              type: 'error',
              duration:2000
            });
          }
        });
      },
      //行业要闻
      handleIndustList(){
        var _this = this;
        this.$http.get("/api/contents?type=industry&deleted=false&currentPage=1&pageSize=2").then(function(res){
          let msg = res.body;
          if(msg.code === 200){
            this.industList = msg.contents;
          }else{
            _this.$message({
              message: msg.message,
              type: 'error',
              duration:2000
            });
          }
        });
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
          cursor: pointer;
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
