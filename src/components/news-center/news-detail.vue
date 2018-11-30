<template>
    <div class="news-detail">
      <div class="top-menu">
        <div class="top-menu-location">
          <span>您现在的位置：首页>新闻动态>新闻详情</span>
        </div>
      </div>
      <div class="detail-title">企业动态</div>
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
          news: {id:'5bfdfcf97720ba5e606254cb',title:'公司董事长应邀为重庆市注册建筑师继续教育培训（2018年度）执讲',content:'xxx',date:'2018年2月12日'}
        };
      },
      mounted() {
        var _this = this;
        this.news.id = this.$route.query.newsId;
        var newsids = this.news.id;
        this.$http.get("/api/contents/"+newsids).then(function(res){
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
    }
</script>

<style lang="less">
  .news-detail {
    .detail-title {
      text-align: center;
      font-weight: bold;
      font-size: 16px;
      line-height: 80px;
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
        background-color: #3031339c;
        padding: 5px;
        border-radius: 3px;
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
      padding: 60px 0;
    }
    .news-content {
        .content {
          width: 1280px;
          text-align: center;
          .content-center {
            font-weight: bold;
            text-align: center;
            margin: 20px 0;
          }
          p {
            text-align: left;
            padding: 25px 90px;
            line-height: 30px;
          }
          img {
            width: 716px;
            height: 431px;
          }
        }
    }
  }
</style>
