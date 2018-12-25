<template>
    <div class="news-detail">
      <div class="top-menu">
        <div class="top-menu-location">
          <span>您现在的位置：<router-link to="/" >首页</router-link>><router-link to="/news">新闻资讯</router-link>>新闻详情</span>
        </div>
      </div>
      <div class="detail-title">
        <div class="link-back" @click="backTo()">返&nbsp;回</div>
        {{activeName}}
      </div>
      <div class="content-botton">
        <div class="menu-title">
          <b>{{news.title}}</b>
          <div class="news-date">{{news.date}}</div>
        </div>
        <div class="news-content"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "news-detail",
      data() {
        return {
          news: {id:'5bfdfcf97720ba5e606254cb',title:'公司董事长应邀为重庆市注册建筑师继续教育培训（2018年度）执讲',content:'xxx',date:'2018年2月12日'},
          activeName:'企业动态'
        };
      },
      mounted() {
        var _this = this;
        this.news.id = this.$route.query.newsId;
        this.activeName = this.$route.query.activeName;
        var newsids = this.news.id;
        this.$http.get("http://back.tylin-bim.cn/api/contents/"+newsids+"?type=enterprise").then(function(res){
          var msg = res.body;
          if(msg.code === 200){
            this.news.id = msg.id;
            this.news.title = msg.title;
            this.news.date = msg.date;
            $('.news-content').html(msg.content);
          }else{
            _this.$message({
              message: msg.message,
              type: 'error',
              duration:2000
            });
          }
        });
      },
      created() {
      },
      methods:{
        backTo:function(){
          let num = 0;
          if(this.activeName === '企业动态'){
            num = 0;
          }else if(this.activeName === '战略合作') {
            num = 1;
          }
          this.$router.push({path:"/news", query: { newsFlag: num}})
        },
      }
    }
</script>

<style lang="less">
  .news-detail {
    .detail-title {
      text-align: center;
      font-weight: bold;
      font-size: 16px;
      line-height: 80px;
      position: relative;
      .link-back {
        position: absolute;
        left: 313px;
        line-height: 19px;
        top: 20px;
        font-size: 14px;
        font-weight: 100;
        border: 1px #ccc solid;
        padding: 3px 10px;
        cursor: pointer;
      }
    }
    .top-menu {
      margin-top: 65px;
      background: url("./news.jpg") center;
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
    .menu-title {
      text-align: center;
      .news-date {
        font-size: 13px;
        line-height: 18px;
        margin-bottom: 34px;
      }
      b {
        font-size: 16px;
        line-height: 62px;
      }
    }
    .content-botton {
      width: 1280px;
      margin: 0 auto;
      border: 1px #ccc solid;
      padding: 25px 0;
    }
    .news-content {
        .content {
          width: 1140px;
          text-align: center;
          padding: 0 40px;
          .content-center {
            font-weight: bold;
            text-align: center;
            margin: 20px 0;
          }
          p {
            text-align: left;
            padding: 20px 0;
            line-height: 35px;
            text-indent:2em;
          }
          img {
            width: 716px;
            /*height: 431px;*/
          }
          h6 {
            text-align: left;
            font-size: 16px;
            line-height: 30px;
          }
          li{
            text-align: left;
            line-height: 35px;
          }
          .distance {
            padding: 0;
          }
          .bottom-a {
            float: left;
            margin-top: 20px;
            font-weight: bold;
          }
        }
    }

  }
</style>
